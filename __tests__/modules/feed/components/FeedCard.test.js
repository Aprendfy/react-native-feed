import React from 'react';
import { shallow } from 'enzyme';
import {
  FeedCard,
  CardHeader,
  CardBody,
} from '../../../../src/modules/feed/components';

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
  const wrapper = shallow(<FeedCard {...props} />);

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { title, category, readingTime, level, color, image, body } = props;
    const headerProps = { title, readingTime, level, color, image, category };

    const cardHeader = wrapper.find(CardHeader);
    const cardBody = wrapper.find(CardBody);

    expect(cardHeader.exists()).toBe(true);
    expect(cardBody.exists()).toBe(true);

    expect(cardHeader.props()).toEqual(headerProps);
    expect(cardBody.props()).toEqual({ text: body });
  });

});
