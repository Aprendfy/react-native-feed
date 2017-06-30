import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { FeedCard } from '../../../src/components/feed/FeedCard';

const props = {
  title: 'title',
  tag: 'tag',
  readingTime: 'readingtime',
  level: 'level',
  color: 'red',
  image: 'image',
  category: 'category',
  body: 'BODY'
};

describe('<FeedCard />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<FeedCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
