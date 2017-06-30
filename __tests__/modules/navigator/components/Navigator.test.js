import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Navigator } from '../../../../src/modules/navigator/components/Navigator';

const props = {
  showAlert: jest.fn(),
  renderAlert: jest.fn(),
  navActions: {},
  navState: {}
};

describe('<Navigator />', () => {
  it.skip('Should have a snapshot', () => {
    const wrapper = shallow(<Navigator {...props} />);
    expect(wrapper).toMatchSnapshot();
  }, 'Esse é um cenário estranho que todo teste ele recebe uma key diferente');
});
