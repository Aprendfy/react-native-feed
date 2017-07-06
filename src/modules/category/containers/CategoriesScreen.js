import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ItemList } from '../components/';
import { Router } from '../../../router/routes';
import { fetchCategories } from '../actions';
import { rightSideIcon } from '../../navigator/components/NavigationBarItems';
import { fetchFeed } from '../../feed/actions';

let route = {}

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
    route = Router.getRoute('feed', { title: 'Facebook', tab: 0});
    this.props.refreshCategories();
  }

  componentDidMount() {

    console.log(route);

  }

  renderItem({ item, index }) {
    return <ItemList
            title={item.title}
            color={item.color}
            id={index}
            onPress={this.onPressCategory}
          />;
  }

  onPressCategory(title, tab) {
    this.props.navigator.push(route);
    this.props.fetchFeeds(title);
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
  return {
    categories: state.categories.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshCategories: () => dispatch(fetchCategories()),
    fetchFeeds: category => dispatch(fetchFeed(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
