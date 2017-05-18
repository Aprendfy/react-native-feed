import React, { Component } from 'react';
import {
  FlatList,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from '../../../router/routes';
import IonIcons from 'react-native-vector-icons/Ionicons'
import ItemList from '../../../components/categories/ItemList';
import { categoriesScreenStyles as styles } from '../../../assets/styles/categories/styles';
import { colors } from '../../../assets/styles/styles';

import * as actions from './../actions/index';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.onPressCategorie = this.onPressCategorie.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  static route = {
    navigationBar: {
      visible: true,
      title: 'Etiquetas',
      renderRight: () => {
        return (
          <View style={styles.navButtonsContainer}>
            <View style={styles.navButton}>
              <IonIcons name="ios-pricetag-outline" size={24} color={colors.whitePrimary} />
            </View>
          </View>
        );
      }
    }

  }

  componentWillMount() {
    const { categoriesState, categoriesActions } = this.props;
    categoriesActions.fetchCategories();
  }

  renderItem({ item, index }) {
    return <ItemList title={item.title} color={item.color} id={index} onPress={this.onPressCategorie} />;
  }

  onPressCategorie(title, tab) {
    this.props.navigator.push(Router.getRoute('feed', { title, tab }));
  }

  render() {
    const { categoriesState, categoriesActions } = this.props;
    return (
      <View>
        <FlatList
          renderItem={this.renderItem}
          data={categoriesState.categories}
          keyExtractor={(item, index) => index}
        />
      </View>
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
