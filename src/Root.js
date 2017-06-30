import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

import configureStore from './store/configureStore';
import Navigation from './modules/navigator/containers/Navigator';

const store = configureStore({});
console.ignoredYellowBox = ['Warning: BackAndroid'];

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
