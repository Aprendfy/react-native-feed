import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import Styles from './styles/CardBodyStyle';

export const CardBody = ({ text }) => {
  return (
    <View style={Styles.textWrapper}>
      <Text style={Styles.text}>
        {text}
      </Text>
    </View>
  );
};

CardBody.propTypes = {
  text: PropTypes.string.isRequired,
};
