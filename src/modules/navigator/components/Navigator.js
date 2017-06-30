import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from '../../../router/routes';
import * as actions from '../actions/index';
import * as styles from '../../../assets/styles/styles';

export class Navigator extends Component {

  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  componentWillUpdate() {
    const { navActions, navState } = this.props;
    if (navState.showAlert) {
      navActions.toggleAlert();
    }
  }

  showAlert() {
    const { navState } = this.props;
    const { colors } = styles;
    MessageBarManager.showAlert({
      title: navState.alertBody.title,
      message: navState.alertBody.message,
      alertType: navState.alertBody.type,
      duration: navState.alertBody.duration,
      stylesheetError: { backgroundColor: colors.alertPrimary, strokeColor: colors.alertPrimary },
      stylesheetWarning: { backgroundColor: colors.warning, strokeColor: colors.warning },
      stylesheetInfo: { backgroundColor: colors.info, strokeColor: colors.info },
      viewTopInset: (Platform.OS === 'ios') ? 20 : 0,
      messageStyle: { color: (navState.alertBody.type === 'warning') ? colors.blackPrimaryAlt : colors.whitePrimary, fontSize: 16 }
    });
  }

  renderAlert() {
    const { navState } = this.props;
    if (navState.showAlert) {
      this.showAlert();
    }
  }

  render() {
    const { colors } = styles;
    return (
      <NavigationProvider router={Router}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <StackNavigation
          id="master"
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: colors.primaryColor,
              tintColor: colors.whitePrimary,
            }
          }}
          initialRoute={Router.getRoute('categories')}
        />
        {this.renderAlert()}
        <MessageBar ref="alert" />
      </NavigationProvider>
    );
  }
}

export default connect(
  state => ({
    navState: state.navigator
  }),
  dispatch => ({
    navActions: bindActionCreators(actions, dispatch)
  }))(Navigator);
