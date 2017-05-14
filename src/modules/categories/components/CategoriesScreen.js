import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from '../../../router/routes';

import * as actions from './../actions/index';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.goToCat = this.goToCat.bind(this);
  }

  static route = {
    navigationBar: {
      visible: true,
      title: 'Categorias'
    }

  }

  goToCat(title, tab) {
    this.props.navigator.push(Router.getRoute('feed', { title, tab }));
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TouchableOpacity onPress={() => this.goToCat('Facebook Ads', 0)}>
          <View style={{ elevation: 5, alignItems: 'center', height: 100, justifyContent: 'center', backgroundColor: '#3b5998' }}>
            <Text style={{ fontSize: 16, color: '#fff' }}>Facebook Ads</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.goToCat('Google Ads', 1)}>
          <View style={{ elevation: 5, alignItems: 'center', height: 100, justifyContent: 'center', backgroundColor: '#34a853' }}>
            <Text style={{ fontSize: 16, color: '#fff' }}>Google Ads</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.goToCat('Twitter Ads', 2)}>
          <View style={{ elevation: 5, alignItems: 'center', height: 100, justifyContent: 'center', backgroundColor: '#1da1f2' }}>
            <Text style={{ fontSize: 16, color: '#fff' }}>Twitter Ads</Text>
          </View>
        </TouchableOpacity >
        <View />
      </View >
    );
  }
}

export default connect(
  state => ({
    categoriesState: state.categories
  }),
  dispatch => ({
    categoriesActions: bindActionCreators(actions, dispatch),
  })
)(CategoriesScreen);
