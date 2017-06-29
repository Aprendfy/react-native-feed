import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { FeedScreen } from '../../../../src/modules/categories/components/FeedScreen';

const props = {
};

describe('<FeedScreen />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<FeedScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
