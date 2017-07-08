import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, InteractionManager } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { FeedList } from '../components/FeedList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { colors } from '../../theme/styles';
import * as actions from '../actions/index';
import { backButtonAndTitle } from '../../navigator/components/NavigationBarItems';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab,
      backgroundColor: props.route.params.color,
      interactionsComplete: false,
    };
  }

  static route = {
    navigationBar: {
      visible: true,
    }
  }

  componentWillMount() {
    this.props.feedActions.fetchFeed();
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ interactionsComplete: true });
    });
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
    const { backgroundColor } = this.state;
    const { fetchMoreFeed } = feedActions;
    if (!this.state.interactionsComplete) {
      return (
        <View style={{ backgroundColor, flex: 1, justifyContent: 'center' }}>
          <LoadingSpinner />
        </View>
      );
    }
    return (
      <FeedList
        containerStyle={{ flex: 1 }} tabLabel="Facebook"
        index={0} color={backgroundColor}
        list={feedList} onEndReached={fetchMoreFeed}
      />
      // <ScrollableTabView
      //   renderTabBar={() => <View />}
      //   tabBarBackgroundColor="red"
      //   tabBarTextStyle={{ fontWeight: '600' }}
      //   onChangeTab={item => this.updateTitle(item)}
      //   initialPage={this.state.tab}
      // >
      //   <FeedList
      //     containerStyle={{ flex: 1 }} tabLabel="Facebook"
      //     index={0} name="Primeira" color={colors.categorieFacebook}
      //     list={feedList} onEndReached={fetchMoreFeed}
      //   />
      //   <FeedList
      //     containerStyle={{ flex: 1 }} tabLabel="Google+"
      //     index={1} name="Segunda" color={colors.categorieGooglePlus}
      //     list={feedList} onEndReached={fetchMoreFeed}
      //   />
      //   <FeedList
      //     containerStyle={{ flex: 1 }} tabLabel="Twitter"
      //     index={2} name="Terceira" color={colors.categorieTwitter}
      //     list={feedList} onEndReached={fetchMoreFeed}
      //   />
      // </ScrollableTabView>
    );
  }
}

FeedScreen.propTypes = {
  navigator: PropTypes.object,
  feedList: PropTypes.array,
  feedActions: PropTypes.object,
};

FeedScreen.defaultProps = {
  navigator: {},
  feedActions: {},
  feedList: [],
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
