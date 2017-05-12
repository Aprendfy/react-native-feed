import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FeedList from './FeedList.js';


import * as actions from './../actions/index';
import * as navActions from '../../navigator/actions/index';

class FeedScreen extends Component {

	static route = {
		navigationBar: {
			visible: true,
			title: 'Feed'
		}
	}

	componentWillMount() {
		const { feedActions, navActions } = this.props;
		feedActions.fetchFeed();
		navActions.setAlert({ title: 'Do I have a title?', message: 'Oh yes, I do! =)', type: 'info', duration: 6000 });
	}
	
	render() {
		return(
		<ScrollableTabView
			renderTabBar={() => <View />}
			tabBarBackgroundColor='red'
			tabBarTextStyle={{ fontWeight: '600' }}
		>
			<View style={{ flex: 1 }} tabLabel="" onPress={() => console.log('User!')}>
				<FeedList name="Esquerdo"/>
			</View>
			<View style={{ flex: 1 }} tabLabel="" onPress={() => console.log('Page!')}>
				<FeedList name="Direito"/>
			</View>
		</ScrollableTabView>
		)
	}
}

export default connect(
	state => ({
		feedState: state.feed
	}),
	dispatch => ({
		feedActions: bindActionCreators(actions, dispatch),
		navActions: bindActionCreators(navActions, dispatch)
	})
)(FeedScreen);
