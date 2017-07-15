import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, InteractionManager } from 'react-native';
import { connect } from 'react-redux';

import { FeedList } from '../components/FeedList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { stdStyle } from '../../theme/styles';
import { navigationBar } from '../../navigator/components/NavigationBarItems';
import { fetchFeedByCategory } from '../actions/index';

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route.params.title,
      tab: props.route.params.tab,
      backgroundColor: props.route.params.color,
      isLoading: true
    };
  }

  // TODO: Estamos tendo duas NavBar, só que uma está escondida. Porque não usar esta?
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  componentWillMount() {
    this.props.getPosts('Facebook');
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => this.setState({ isLoading: false }));
  }

  render() {
    const { backgroundColor } = this.state;
    const { feedList, getPosts } = this.props;

    return (
      <View style={stdStyle.container}>
        {navigationBar(this.props.navigator, this.state.title)}
        {this.state.isLoading ? <LoadingSpinner style={{ backgroundColor }} /> :
        <FeedList
          tabLabel="Facebook"
          color={backgroundColor}
          list={feedList}
          onEndReached={() => getPosts('Facebook')}
        />
        }
      </View>
    );
  }
}

FeedScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
  feedList: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    feedList: state.feed.posts['Facebook'] || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: category => dispatch(fetchFeedByCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
