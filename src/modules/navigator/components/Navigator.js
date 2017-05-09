import React, { Component, PropTypes } from 'react';
import { StatusBar } from 'react-native';
import { Router } from '../../../router/routes';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';


class Navigator extends Component {

    render() {
        return (
            <NavigationProvider router={Router}>
                <StatusBar
                    backgroundColor='#DD3142'
                    barStyle="light-content"
                />
                <StackNavigation
                    id="master"
                    defaultRouteConfig={{
                        navigationBar: {
                            backgroundColor: '#DD3142',
                            tintColor: '#ffffff',
                        }
                    }}
                    initialRoute={Router.getRoute('feed')}
                />
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