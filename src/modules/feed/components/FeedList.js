import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './../actions/index';

class FeedList extends Component {

	constructor(props) {
		super(props);
		this.renderItem = this.renderItem.bind(this);
		this.renderSeparator = this.renderSeparator.bind(this);

	}

	renderItem({ item, index }) {
		return <Text>{this.props.name} {index}</Text>;
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					flex: 1,
					backgroundColor: "#CED0CE",
					marginTop: 10,
					marginBottom: 10
				}}
			/>
		);
	};

	render() {
		const { feedState, feedActions } = this.props;
		return (
			<View style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
				<FlatList
					renderItem={this.renderItem}
					data={feedState.feedList}
					keyExtractor={(item, index) => index}
					onEndReached={() => feedActions.fetchMoreFeed(feedState.feedList)}
					onEndThreshold={10}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

export default connect(
	state => ({
		feedState: state.feed
	}),
	dispatch => ({
		feedActions: bindActionCreators(actions, dispatch)
	})
)(FeedList);
