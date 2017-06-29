import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesScreen } from '../../../../src/modules/categories/components/CategoriesScreen';

const props = {
  categoriesActions: {
    fetchCategories: () => {}
  },
  categoriesState: {
    categories: {}
  }
};

describe('<CategoriesScreen />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CategoriesScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
