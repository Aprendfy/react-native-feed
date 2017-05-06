import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedCard from '../../../components/FeedCard';

import * as actions from './../actions/index';

class FeedScreen extends Component {

	constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    this.renderRow = this.renderRow.bind(this);
  }
	componentWillMount() {
		const { feedActions } = this.props;
		feedActions.fetchFeed();
	}

	renderRow(item) {
		return <Text>{item}</Text>;
	}

	render() {
		const ds = this.state.dataSource;
		const { feedList } = this.props.feedState;
		return (
			<ListView
				enableEmptySections
				dataSource={ds.cloneWithRows(feedList)}
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
