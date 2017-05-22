import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from '../../../router/routes';
import * as actions from '../actions/index';
import * as styles from '../../../assets/styles/styles';

class Navigator extends Component {

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
    MessageBarManager.showAlert({
      title: navState.alertBody.title,
      message: navState.alertBody.message,
      alertType: navState.alertBody.type,
      duration: navState.alertBody.duration,
      stylesheetError: { backgroundColor: styles.colors.alertPrimary, strokeColor: styles.colors.alertPrimary },
      stylesheetWarning: { backgroundColor: styles.colors.warning, strokeColor: styles.colors.warning },
      stylesheetInfo: { backgroundColor: styles.colors.info, strokeColor: styles.colors.info },
      viewTopInset: (Platform.OS === 'ios') ? 20 : 0,
      messageStyle: { color: (navState.alertBody.type === 'warning') ? styles.colors.blackPrimaryAlt : styles.colors.whitePrimary, fontSize: 16 }
    });
  }

  renderAlert() {
    const { navState } = this.props;
    if (navState.showAlert) {
      this.showAlert();
    }
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar
          backgroundColor={styles.colors.primaryColor}
          barStyle="light-content"
        />
        <StackNavigation
          id="master"
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: styles.colors.primaryColor,
              tintColor: '#ffffff',
            }
          }}
          initialRoute={Router.getRoute('feed')}
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
