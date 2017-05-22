import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/styles/styles';

class CardHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, tag, time, level, color, image } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          resizeMethod="scale"
          resizeMode="cover"
          source={image}
        >
          <LinearGradient colors={['transparent', color]} style={{ flex: 1, paddingHorizontal: 10 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text style={{ color: 'white', fontSize: 27, fontWeight: '500' }}>{title}</Text>
            </View>
          </LinearGradient>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: color, padding: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <IonIcons name="ios-pricetag-outline" size={14} color={colors.whitePrimary} />
              <Text style={{ marginHorizontal: 5, color: colors.whitePrimary, fontSize: 12 }}>{tag}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <IonIcons name="ios-time-outline" size={14} color={colors.whitePrimary} />
              <Text style={{ marginHorizontal: 5, color: colors.whitePrimary, fontSize: 12 }}>{time}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <IonIcons name="ios-school" size={14} color={colors.whitePrimary} />
              <Text style={{ marginHorizontal: 5, color: colors.whitePrimary, fontSize: 12 }}>{level}</Text>
            </View>
          </View>

        </Image>

      </View>

    );
  }

}

export default CardHeader;
