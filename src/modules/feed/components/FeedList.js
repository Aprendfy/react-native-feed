import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { CardSeparator, FeedCard } from './';

const renderItem = (color) => {
  return ({ item }) =>
    <FeedCard
      title={item.title}
      category={item.category}
      readingTime={item.readingTime}
      level={item.level}
      image={item.image}
      body={item.body}
      color={color}
    />;
};

export class FeedList extends Component {
  render() {
    const { list, onEndReached, color, containerStyle, tabLabel } = this.props;
    return (
      <View style={containerStyle} tabLabel={tabLabel}>
        <FlatList
          renderItem={renderItem(color)}
          data={list}
          keyExtractor={(item, index) => item + index}
          onEndReached={() => onEndReached(list)}
          onEndThreshold={10}
          ItemSeparatorComponent={() => <CardSeparator />}
        />
      </View>
    );
  }
}

FeedList.propTypes = {
  color: PropTypes.string.isRequired,
  onEndReached: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};
