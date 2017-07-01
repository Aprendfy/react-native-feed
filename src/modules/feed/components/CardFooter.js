import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import Styles from './styles/CardFooterStyle';

export const CardFooter = () => {
  return (
    <View style={Styles.container} >
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-5511910440808215/9505833480"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={error => console.log(error, 'error de banner')}
      />
    </View>
  );
};
