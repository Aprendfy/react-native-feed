import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { FeedList } from '../components/FeedList';

import { colors } from '../../theme/styles';
import * as actions from '../actions/index';

class FeedScreen extends Component {
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
      renderTitle: ({ params }) => {
        const { context = {} } = params;
        const { state = {} } = context;
        return (
          <View
            style={{
              width: '100%',
              height: 48,
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 18, color: '#FFF' }}>{state.title}</Text>
          </View>
        );
      }
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
        <View style={{ flex: 1 }} tabLabel="Facebook">
          <FeedList
            index={0} name="Primeira" color={colors.categorieFacebook}
            list={feedList} onEndReached={fetchMoreFeed}
          />
        </View>
        <View style={{ flex: 1 }} tabLabel="Google+">
          <FeedList
            index={1} name="Segunda" color={colors.categorieGooglePlus}
            list={feedList} onEndReached={fetchMoreFeed}
          />
        </View>
        <View style={{ flex: 1 }} tabLabel="Twitter">
          <FeedList
            index={2} name="Terceira" color={colors.categorieTwitter}
            list={feedList} onEndReached={fetchMoreFeed}
          />
        </View>
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
