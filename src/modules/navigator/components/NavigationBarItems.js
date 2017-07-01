import React from 'react';
import { View, Text } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { categoriesScreenStyles as styles } from '../../theme/categories/styles';
import { colors } from '../../theme/styles';

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
