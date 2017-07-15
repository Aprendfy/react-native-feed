import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ItemList } from '../components/';
import { Router } from '../../../router/routes';
import { fetchCategories } from '../actions';
import { rightSideIcon } from '../../navigator/components/NavigationBarItems';

export class CategoriesScreen extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Categorias',
      renderRight: rightSideIcon
    }
  }

  componentWillMount() {
    this.props.refreshCategories();
  }

  renderItem({ item: { title, color } }) {
    return <ItemList title={title} color={color} id={title} onPress={(title, index, color) => this.onPressCategory(title, index, color)} />;
  }

  onPressCategory(title, index, color) {
    this.props.navigator.push(Router.getRoute('feed', { category: title, color }));
  }

  render() {
    return (
      <FlatList
        renderItem={item => this.renderItem(item)}
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
  return {
    categories: state.categories.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
