import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FeedList } from '../components/FeedList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { stdStyle } from '../../theme/styles';
import { navigationBar } from '../../navigator/components/NavigationBarItems';
import * as actions from '../actions/index';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab,
      backgroundColor: props.route.params.color,
      interactionsComplete: false
    };
  }

  //TODO: Estamos tendo duas NavBar, só que uma está escondida. Porque não usar esta?
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  componentWillMount() {
    this.props.feedActions.fetchFeedByCategory('Facebook');
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ interactionsComplete: true });
    });
  }

  render() {
    const { backgroundColor } = this.state;
    const { container } = stdStyle;

    if (!this.state.interactionsComplete) {
      return (
        <View style={container}>
          {navigationBar(this.props.navigator, this.state.title)}
          <LoadingSpinner style={[container, { backgroundColor, justifyContent: 'center' }]} />
        </View>
      );
    }

    const { feedActions, feedList } = this.props;
    const { fetchFeedByCategory } = feedActions;
    const feedMoreCallBack = () => fetchFeedByCategory('Facebook');

    console.log('PROPERTIES: ', feedList);
    return (
      <View style={container}>
        {navigationBar(this.props.navigator, this.state.title)}
        <FeedList
          containerStyle={container}
          tabLabel="Facebook"
          color={backgroundColor}
          list={feedList}
          onEndReached={feedMoreCallBack}
        />
      </View>
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
  console.log('STATE POST CHECK', state.feed.posts['Facebook']);
  return {
    feedList: state.feed.posts['Facebook']
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    feedActions: bindActionCreators(actions, dispatch),
    getPosts: dispatch(actions.fetchFeedByCategory('Facebook'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
