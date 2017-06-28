import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { feedCardStyle as styles } from '../../assets/styles/feed/styles';

class FeedCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, category, readingTime, level, color, image, body } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <CardHeader
            title={title}
            tag={category}
            readingTime={readingTime}
            level={level}
            color={color}
            image={{ uri: image }}
          />
        </View>
        <View style={styles.bodyContainer}>
          <CardBody text={body} />
        </View>
        <View style={styles.footerContainer}>
          <CardFooter />
        </View>
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
  dateCreated: PropTypes.string,
};

FeedCard.defaultProps = {
  title: '',
  category: '',
  readingTime: '',
  level: '',
  color: '',
  image: '',
  body: '',
  dateCreated: '',

};

export default FeedCard;
