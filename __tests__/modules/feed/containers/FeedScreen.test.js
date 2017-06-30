import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { FeedScreen } from '../../../../src/modules/feed/containers/FeedScreen';

const props = {
  feedActions: {
    fetchFeed: jest.fn()
  },
  route: {
    params: {
      tab: 2,
      title: 'title'
    }
  }
};

describe('<FeedScreen />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<FeedScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});