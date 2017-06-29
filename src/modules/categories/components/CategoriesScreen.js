import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import IonIcons from 'react-native-vector-icons/Ionicons';
import ItemList from '../../../components/categories/ItemList';
import { Router } from '../../../router/routes';
import { categoriesScreenStyles as styles } from '../../../assets/styles/categories/styles';
import { colors } from '../../../assets/styles/styles';
import { fetchCategories } from '../actions';

export class CategoriesScreen extends Component {
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
    this.props.refreshCategories();
  }

  renderItem({ item, index }) {
    return <ItemList title={item.title} color={item.color} id={index} onPress={this.onPressCategorie} />;
  }

  onPressCategorie(title, tab) {
    this.props.navigator.push(Router.getRoute('feed', { title, tab }));
  }

  render() {
    return (
      <View>
        <FlatList
          renderItem={this.renderItem}
          data={this.props.categories}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

CategoriesScreen.propTypes = {
  categories: PropTypes.array.isRequired,
  refreshCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { categories } = state.categories;
  return {
    categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
