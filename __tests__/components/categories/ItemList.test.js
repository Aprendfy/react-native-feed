import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { ItemList } from '../../../src/components/categories/ItemList';

const props = {
  color: 'COLOR',
  title: 'TITLE',
  id: 'ID',
  onPress: jest.fn()
};

describe('<ItemList />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<ItemList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
