import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FeedList from './FeedList';

import { colors } from '../../../assets/styles/styles';

import * as actions from './../actions/index';
import * as navActions from '../../navigator/actions/index';

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
    const { feedActions } = this.props;
    feedActions.fetchFeed();
    console.log('teste de log');
    // navActions.setAlert({ title: 'Do I have a title?', message: 'Oh yes, I do! =)', type: 'info', duration: 6000 });
  }
  componentDidMount() {
    const { navigator } = this.props;
    setTimeout(() => {
      navigator.updateCurrentRouteParams({
        context: this
      });
    }, 600);
  }
  async updateTitle(item) {
    const { tabLabel } = item.ref.props;
    const { navigator } = this.props;
    await this.setState({ title: tabLabel });
    navigator.updateCurrentRouteParams({
      context: this
    });
    // setTimeout(() => {
    //   navigator.updateCurrentRouteParams({
    //     context: this
    //   });
    // }, 600);
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <View />}
        tabBarBackgroundColor="red"
        tabBarTextStyle={{ fontWeight: '600' }}
        onChangeTab={item => this.updateTitle(item)}
        initialPage={this.state.tab}

      >
        <View style={{ flex: 1 }} tabLabel="Facebook">
          <FeedList index={0} name="Primeira" color={colors.categorieFacebook} />
        </View>
        <View style={{ flex: 1 }} tabLabel="Google+">
          <FeedList index={1} name="Segunda" color={colors.categorieGooglePlus} />
        </View>
        <View style={{ flex: 1 }} tabLabel="Twitter">
          <FeedList index={2} name="Terceira" color={colors.categorieTwitter} />
        </View>
      </ScrollableTabView>
    );
  }
}

FeedScreen.PropTypes = {
  navigator: PropTypes.object
};
FeedScreen.defaultProps = {
  navigator: {}
};

export default connect(
  state => ({
    feedState: state.feed
  }),
  dispatch => ({
    feedActions: bindActionCreators(actions, dispatch),
    navActions: bindActionCreators(navActions, dispatch)
  })
)(FeedScreen);
