import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import { cardBodyStyle as styles } from '../../assets/styles/feed/styles';

export const CardBody = ({ text }) => {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

CardBody.propTypes = {
  text: PropTypes.string.isRequired,
};
