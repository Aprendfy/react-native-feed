import React, { PropTypes } from 'react';
import { AdMobBanner } from 'react-native-admob';

const CardFooter = () => {
  return (
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID="ca-app-pub-8356555649836141/9541656259"
      testDeviceID="EMULATOR"
      didFailToReceiveAdWithError={this.bannerError}
    />
  );
}

export default CardFooter;
