import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedCard from '../../../components/FeedCard';

import * as actions from './../actions/index';

class FeedScreen extends Component {

	componentWillMount() {
		const { feedActions, feedState } = this.props;
		feedActions.fetchFeed();
		this.createDataSource(feedState);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ feedList }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(feedList);
	}

	renderRow(item) {
		return <Text>{item}</Text>;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default connect(
	state => ({
		feedState: state.feed
	}),
	dispatch => ({
		feedActions: bindActionCreators(actions, dispatch),
	})
)(FeedScreen);
