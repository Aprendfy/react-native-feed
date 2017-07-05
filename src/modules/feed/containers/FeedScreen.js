import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationStyles } from '@expo/ex-navigation';

import { FeedList } from '../components/FeedList';
import { colors } from '../../theme/styles';
import { fetchFeed } from '../actions/index';
import { backButtonAndTitle } from '../../navigator/components/NavigationBarItems';

export class FeedScreen extends Component {
  static route = {
    navigationBar: {
      visible: true,
      renderTitle: () => backButtonAndTitle('Facebook')
    },
    styles: {
      ...NavigationStyles.FloatHorizontal
    }
  }

  render() {
    const { getFeeds, feedList } = this.props;
    return (
      <FeedList
        containerStyle={{ flex: 1 }} tabLabel="Facebook"
        index={0} name="Primeira" color={colors.categorieFacebook}
        list={feedList} onEndReached={() => getFeeds('Facebook')}
      />
    );
  }
}

FeedScreen.PropTypes = {
  feedList: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    feedList: state.feed.feedList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeeds: bindActionCreators(fetchFeed, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
