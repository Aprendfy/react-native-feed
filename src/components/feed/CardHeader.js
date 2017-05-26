import React, { Component, PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/styles/styles';
import { cardHeaderStyles as styles } from '../../assets/styles/feed/styles';

class CardHeader extends Component {

  render() {
    const { title, tag, readingTime, level, color, image } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.imageCover}
          resizeMethod="scale"
          resizeMode="cover"
          source={image}
        >
          <LinearGradient colors={['transparent', color]} style={styles.firstContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </LinearGradient>
          <View style={[styles.secondContainer, { backgroundColor: color }]}>
            <View style={styles.itemDetailWrapper}>
              <IonIcons name="ios-pricetag-outline" size={14} color={colors.whitePrimary} />
              <Text style={styles.detailText}>{tag}</Text>
            </View>
            <View style={styles.itemDetailWrapper}>
              <IonIcons name="ios-time-outline" size={14} color={colors.whitePrimary} />
              <Text style={styles.detailText}>{readingTime}</Text>
            </View>
            <View style={styles.itemDetailWrapper}>
              <IonIcons name="ios-school" size={14} color={colors.whitePrimary} />
              <Text style={styles.detailText}>{level}</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }

}

CardHeader.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  readingTime: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.any)
};

CardHeader.defaultProps = {
  title: '',
  tag: '',
  readingTime: '',
  level: '',
  color: '',
  image: ''
};

export default CardHeader;
