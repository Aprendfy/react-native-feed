import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { FeedCard } from '../../../../src/modules/categories/components/FeedCard';

const props = {
};

describe('<FeedCard />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<FeedCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
