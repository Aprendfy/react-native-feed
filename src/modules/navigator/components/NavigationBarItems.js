import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { categoriesScreenStyles as styles } from '../../theme/categories/styles';
import { stdStyle, colors } from '../../theme/styles';

export const backButtonAndTitle = ({ params }) => {
  const { context = {} } = params;
  const { state = {} } = context;
  return (
    <View
      style={{
        width: '100%',
        height: 48,
        justifyContent: 'center'
      }}
    >
      <Text style={{ fontSize: 18, color: '#FFF' }}>{state.title}</Text>
    </View>
  );
};

export const rightSideIcon = () => {
  return (
    <View style={styles.navButtonsContainer}>
      <View style={styles.navButton}>
        <IonIcons name="ios-pricetag-outline" size={24} color={colors.whitePrimary} />
      </View>
    </View>
  );
};

export const navigationBar = (navigator, title) => {
  return (
    <View style={stdStyle.navBar}>
      <TouchableOpacity onPress={() => navigator.pop()} style={stdStyle.navIconTouch}>
        <IonIcons name={'md-arrow-back'} size={24} color="white" />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ color: colors.whitePrimary, fontSize: 20 }}>{title}</Text>
      </View>
    </View>
  );
};
