import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  InteractionManager,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { FeedList } from '../components/FeedList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { stdStyle, colors } from '../../theme/styles';
import * as actions from '../actions/index';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab,
      backgroundColor: props.route.params.color,
      interactionsComplete: false,
      opSys: (Platform.OS === 'ios') ? 'ios' : 'md',
    };
    this.renderNavBar = this.renderNavBar.bind(this);
  }

  static route = {
    navigationBar: {
      visible: false,
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

  renderNavBar() {
    const { opSys, title } = this.state;
    const { navigator } = this.props;
    return (
      <View style={stdStyle.navBar}>
        <TouchableOpacity onPress={() => navigator.pop()} style={stdStyle.navIconTouch}>
          <Icon name={`${opSys}-arrow-back`} size={24} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={{ color: colors.whitePrimary, fontSize: 20 }}>{title}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { backgroundColor } = this.state;
    const { feedActions, feedList } = this.props;
    const { container } = stdStyle;
    const { fetchMoreFeed } = feedActions;
    if (!this.state.interactionsComplete) {
      return (
        <View style={container}>
          {this.renderNavBar()}
          <View style={[container, { backgroundColor, justifyContent: 'center' }]}>
            <LoadingSpinner />
          </View>
        </View>
      );
    }
    return (
      <View style={container}>
        {this.renderNavBar()}
        <FeedList
          containerStyle={container} tabLabel="Facebook"
          color={backgroundColor}
          list={feedList} onEndReached={fetchMoreFeed}
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
