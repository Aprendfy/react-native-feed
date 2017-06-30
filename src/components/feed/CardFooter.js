import React from 'react';
import { AdMobBanner } from 'react-native-admob';

export const CardFooter = () => {
  return (
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID="ca-app-pub-5511910440808215/9505833480"
      testDeviceID="EMULATOR"
      didFailToReceiveAdWithError={error => console.log(error, 'error de banner')}
    />
  );
};
