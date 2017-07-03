import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import { CardAdsBanner } from './';
import Styles from './styles/CardBodyStyle';

const splitByBlankSpace = /\s+/;
const firstWord = 0;

const splitTextInHalf = (text, firstHalf) => {
  const words = text.split(splitByBlankSpace);
  const middleWord = words.length / 2;
  const halfWords = firstHalf ? words.slice(firstWord, middleWord) : words.slice(middleWord);

  return halfWords.join(' ');
};

export const CardBody = ({ text }) => {
  return (
    <View style={Styles.textWrapper}>
      <Text style={Styles.text}>
        {splitTextInHalf(text, true)}
      </Text>
      <CardAdsBanner />
      <Text style={Styles.text}>
        {splitTextInHalf(text)}
      </Text>
    </View>
  );
};

CardBody.propTypes = {
  text: PropTypes.string.isRequired,
};
