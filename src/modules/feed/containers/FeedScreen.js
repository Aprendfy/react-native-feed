import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { FeedList } from '../components/FeedList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { stdStyle } from '../../theme/styles';
import { fetchFeedByCategory } from '../actions/index';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.route.params.category,
      backgroundColor: props.route.params.color,
      isLoading: true
    };
  }

  static route = {
    navigationBar: {
      title: params => params.category,
      visible: true
    }
  }

  componentWillMount() {
    this.props.getPosts(this.state.category);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => this.setState({ isLoading: false }));
  }

  render() {
    const { backgroundColor, category } = this.state;
    const { feedList, getPosts } = this.props;

    return (
      <View style={stdStyle.container}>
        {this.state.isLoading ? <LoadingSpinner style={{ backgroundColor }} /> :
        <FeedList
          tabLabel={category}
          color={backgroundColor}
          list={feedList[category]}
          onEndReached={() => getPosts(category)}
        />
        }
      </View>
    );
  }
}

FeedScreen.propTypes = {
  feedList: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    feedList: state.feed.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: category => dispatch(fetchFeedByCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
