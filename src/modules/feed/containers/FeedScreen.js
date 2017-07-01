import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { FeedList } from '../components/FeedList';
import { colors } from '../../theme/styles';
import * as actions from '../actions/index';
import { backButtonAndTitle } from '../../navigator/components/NavigationBarItems';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab
    };
  }

  static route = {
    navigationBar: {
      visible: true,
      renderTitle: backButtonAndTitle
    }
  }

  componentWillMount() {
    this.props.feedActions.fetchFeed();
  }

  componentDidMount() {
    const { navigator } = this.props;
    setTimeout(() => {
      navigator.updateCurrentRouteParams({
        context: this
      });
    }, 600);
  }

  updateTitle(item) {
    const { tabLabel } = item.ref.props;
    const { navigator } = this.props;
    this.setState({ title: tabLabel });
    navigator.updateCurrentRouteParams({
      context: this
    });
  }

  render() {
    const { feedActions, feedList } = this.props;
    const { fetchMoreFeed } = feedActions;
    return (
      <ScrollableTabView
        renderTabBar={() => <View />}
        tabBarBackgroundColor="red"
        tabBarTextStyle={{ fontWeight: '600' }}
        onChangeTab={item => this.updateTitle(item)}
        initialPage={this.state.tab}
      >
        <FeedList
          containerStyle={{ flex: 1 }} tabLabel="Facebook"
          index={0} name="Primeira" color={colors.categorieFacebook}
          list={feedList} onEndReached={fetchMoreFeed}
        />
        <FeedList
          containerStyle={{ flex: 1 }} tabLabel="Google+"
          index={1} name="Segunda" color={colors.categorieGooglePlus}
          list={feedList} onEndReached={fetchMoreFeed}
        />
        <FeedList
          containerStyle={{ flex: 1 }} tabLabel="Twitter"
          index={2} name="Terceira" color={colors.categorieTwitter}
          list={feedList} onEndReached={fetchMoreFeed}
        />
      </ScrollableTabView>
    );
  }
}

FeedScreen.PropTypes = {
  feedList: PropTypes.array,
  feedActions: PropTypes.any
};

FeedScreen.defaultProps = {
  navigator: {}
};

const mapStateToProps = (state) => {
  return {
    feedList: state.feed.feedList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    feedActions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
