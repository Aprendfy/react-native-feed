import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

import { cardBodyStyle as styles } from '../../assets/styles/feed/styles';

const CardBody = ({ text }) => {
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

export default CardBody;
