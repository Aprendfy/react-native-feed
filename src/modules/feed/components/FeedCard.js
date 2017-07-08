import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { CardHeader, CardBody } from './';
import Styles from './styles/FeedCardStyle';

export class FeedCard extends React.PureComponent {
  render() {
    const { title, category, readingTime, level, color, image, body } = this.props;
    const headerProps = { title, readingTime, level, color, image, category };

    return (
      <View style={Styles.fullContainer}>
        <CardHeader {...headerProps} />
        <CardBody text={body} />
      </View>
    );
  }
}

FeedCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  readingTime: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
};

FeedCard.defaultProps = {
  title: '',
  category: '',
  readingTime: '',
  level: '',
  color: '',
  image: '',
  body: '',
};
