import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { itemListStyles } from '../../theme/categories/styles';

export const ItemList = ({ color, title, id, onPress }) => {
  return (
    <TouchableOpacity style={[itemListStyles.itemStyle, { backgroundColor: color }]} onPress={() => onPress(title, id)}>
      <Text style={itemListStyles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
