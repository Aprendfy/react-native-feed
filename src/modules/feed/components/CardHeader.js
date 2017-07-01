import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/styles';
import Styles from './styles/CardHeaderStyle';

export class CardHeader extends Component {
  render() {
    const { title, category, readingTime, level, color, image } = this.props;
    return (
      <View style={Styles.mainContainer}>
        <Image
          style={Styles.imageCover}
          resizeMethod="scale"
          resizeMode="cover"
          source={{ uri: image }}
        >
          <LinearGradient colors={['transparent', color]} style={Styles.firstContainer}>
            <View style={Styles.titleWrapper}>
              <Text style={Styles.title}>{title}</Text>
            </View>
          </LinearGradient>
          <View style={[Styles.secondContainer, { backgroundColor: color }]}>
            <View style={Styles.itemDetailWrapper}>
              <IonIcons name="ios-pricetag-outline" size={14} color={colors.whitePrimary} />
              <Text style={Styles.detailText}>{category}</Text>
            </View>
            <View style={Styles.itemDetailWrapper}>
              <IonIcons name="ios-time-outline" size={14} color={colors.whitePrimary} />
              <Text style={Styles.detailText}>{readingTime}</Text>
            </View>
            <View style={Styles.itemDetailWrapper}>
              <IonIcons name="ios-school" size={14} color={colors.whitePrimary} />
              <Text style={Styles.detailText}>{level}</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }

}

CardHeader.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  readingTime: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string
};

CardHeader.defaultProps = {
  title: '',
  category: '',
  readingTime: '',
  level: '',
  color: '',
  image: ''
};
