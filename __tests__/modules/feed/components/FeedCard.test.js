import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Styles from '../../../../src/modules/feed/components/styles/FeedCardStyle';
import {
  FeedCard,
  CardHeader,
  CardBody,
  CardFooter
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
    const cardFooter = wrapper.find(CardFooter);

    expect(cardHeader.exists()).toBe(true);
    expect(cardBody.exists()).toBe(true);
    expect(cardFooter.exists()).toBe(true);

    expect(cardHeader.props()).toEqual(headerProps);
    expect(cardBody.props()).toEqual({ text: body });
  });

  it('Should render collapsed', () => {
    expect(wrapper.state('isCollapsed')).toBeTruthy();
    expect(wrapper.find(View).prop('style')).toBe(Styles.collapsedContainer);
  });

  it('Should be expansible', () => {
    const wrapper = shallow(<FeedCard {...props} />);
    wrapper.setState({ isCollapsed: false });

    expect(wrapper.state('isCollapsed')).toBeFalsy();
    expect(wrapper.find(View).prop('style')).toBe(Styles.fullContainer);
  });
});
