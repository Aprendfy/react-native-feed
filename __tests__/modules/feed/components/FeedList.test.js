import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { FeedList } from '../../../../src/modules/feed/components/FeedList';

const props = {
  color: 'red',
  route: {
    params: {
      tab: 'tab',
      title: 'title',
    }
  }
};

describe('<FeedList />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<FeedList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
