import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { CardSeparator, FeedCard } from './';
import { fetchFeed } from '../actions/index';

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
    const { color, tabLabel, getFeeds, feedList } = this.props;
    return (
      <View style={{ flex: 1 }} tabLabel={tabLabel}>
        <FlatList
          data={feedList}
          onEndThreshold={10}
          renderItem={renderItem(color)}
          onEndReached={() => getFeeds('Facebook')}
          keyExtractor={(item, index) => item.title + index}
          ItemSeparatorComponent={() => <CardSeparator />}
        />
      </View>
    );
  }
}

FeedList.PropTypes = {
  feedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFeeds: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  onEndReached: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    feedList: state.feed.feedList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeeds: category => dispatch(fetchFeed(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
