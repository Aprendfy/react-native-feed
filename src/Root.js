import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AdMobInterstitial } from 'react-native-admob';

import configureStore from './store/configureStore';
import Navigator from './modules/navigator/components/Navigator';


AdMobInterstitial.setTestDeviceID('EMULATOR');
AdMobInterstitial.setAdUnitID('ca-app-pub-5511910440808215/8860031880');

const store = configureStore({});
console.ignoredYellowBox = ['Warning: BackAndroid'];

export default class Root extends Component {

  componentWillMount() {
    AdMobInterstitial.removeAllListeners();
  }

  componentDidMount() {
   // Splashscreen.hide();
    AdMobInterstitial.addEventListener('interstitialDidLoad', () => console.log('interstitialDidLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidClose', this.interstitialDidClose);
    AdMobInterstitial.addEventListener('interstitialDidFailToLoad', () => console.log('interstitialDidFailToLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidOpen', () => console.log('interstitialDidOpen event'));
    AdMobInterstitial.addEventListener('interstitialWillLeaveApplication', () => console.log('interstitalWillLeaveApplication event'));

    AdMobInterstitial.requestAd(error => error && console.log(`${error} - admob`));
  }

  render() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
  }
}
