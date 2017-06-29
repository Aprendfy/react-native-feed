import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../../components/feed/FeedCard';

import * as actions from './../actions/index';

export class FeedList extends Component {
  renderItem({ item }) {
    return (
      <Card
        title={item.title}
        category={item.category}
        readingTime={item.readingTime}
        level={item.level}
        image={item.image}
        body={item.body}
        color={this.props.color}
      />
    );
  }

  async componentWillMount() {
    const { feedActions } = this.props;
    await feedActions.fetchFeed();
    console.log(this.props.feedState);
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          flex: 1,
          backgroundColor: '#CED0CE',
          marginTop: 10
        }}
      />
    );
  };

  render() {
    const { feedState, feedActions } = this.props;
    return (
      <View>
        <FlatList
          renderItem={this.renderItem}
          data={feedState.feedList}
          keyExtractor={(item, index) => index}
          onEndReached={() => feedActions.fetchMoreFeed(feedState.feedList)}
          onEndThreshold={10}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

FeedList.propTypes = {
  feedActions: PropTypes.object,
  feedState: PropTypes.object,
  color: PropTypes.string.isRequired
};

FeedList.defaultProps = {
  feedActions: {},
  feedState: {}
};

export default connect(
  state => ({
    feedState: state.feed
  }),
  dispatch => ({
    feedActions: bindActionCreators(actions, dispatch)
  })
)(FeedList);
