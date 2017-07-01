import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardFooter } from '../../../../src/modules/feed/components/CardFooter';

describe('<CardFooter />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
