import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { FeedList } from '../components/FeedList';
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView';
import { fetchFeedByCategory } from '../actions/index';

export class FeedScreen extends Component {
  state = {
    backgroundColor: this.props.route.params.color,
    isLoading: true
  }

  static propTypes = {
    categoryFeeds: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
  }

  static defaultProps = {
    categoryFeeds: []
  }

  static route = {
    navigationBar: {
      title: params => params.category
    }
  }

  componentWillMount() {
    this.props.getPosts();
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => this.setState({ isLoading: false }));
  }

  render() {
    const { backgroundColor, isLoading } = this.state;
    const { categoryFeeds, getPosts } = this.props;

    return (
      <LoadingSpinnerView isLoading={isLoading} spinnerStyle={{ backgroundColor }}>
        <FeedList
          color={backgroundColor}
          list={categoryFeeds}
          onEndReached={getPosts}
        />
      </LoadingSpinnerView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.route.params;

  return {
    categoryFeeds: state.feed.posts[category]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { category } = ownProps.route.params;

  return {
    getPosts: () => dispatch(fetchFeedByCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
