import React, { Component, PropTypes } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FeedCard from '../../../components/feed/FeedCard';


import * as actions from './../actions/index';

class FeedList extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
  }

  renderItem({ item, index }) {
    return (
      <FeedCard
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

  renderSeparator = () => {
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
