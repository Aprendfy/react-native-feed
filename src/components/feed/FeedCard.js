import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../assets/styles/styles';
import CardHeader from './CardHeader';

class FeedCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, category, readingTime, level, color, image, body, dateCreated } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <CardHeader
            title={title}
            tag={category}
            time={readingTime}
            level={level}
            color={colors.categorieFacebook}
            image={{ uri: image }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ color: colors.blackPrimary, fontSize: 14, padding: 5 }}>
            {body}
          </Text>
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
