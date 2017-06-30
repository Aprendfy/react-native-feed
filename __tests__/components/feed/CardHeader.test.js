import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardHeader } from '../../../src/components/feed/CardHeader';

const props = {
  title: 'title',
  tag: 'tag',
  readingTime: 'readingtime',
  level: 'level',
  color: 'red',
  image: {}
};

describe('<CardHeader />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
