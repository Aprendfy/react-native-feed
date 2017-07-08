import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ItemList } from '../components/';
import { Router } from '../../../router/routes';
import { fetchCategories } from '../actions';
import { rightSideIcon } from '../../navigator/components/NavigationBarItems';

export class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.onPressCategory = this.onPressCategory.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  static route = {
    navigationBar: {
      visible: true,
      title: 'Etiquetas',
      renderRight: rightSideIcon
    }
  }

  componentWillMount() {
    this.props.refreshCategories();
  }

  renderItem({ item, index }) {
    return <ItemList title={item.title} color={item.color} id={index} onPress={this.onPressCategory} />;
  }

  onPressCategory(title, tab, color) {
    this.props.navigator.push(Router.getRoute('feed', { title, tab, color }));
  }

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={this.props.categories}
        keyExtractor={(item, index) => index}
      />
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
