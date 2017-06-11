import React, { PropTypes } from 'react';
import { AdMobBanner } from 'react-native-admob';

const CardFooter = () => {
  return (
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID="ca-app-pub-5511910440808215/8860031880"
      testDeviceID="EMULATOR"
      didFailToReceiveAdWithError={this.bannerError}
    />
  );
}

export default CardFooter;
