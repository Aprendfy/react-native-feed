import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardAdsBanner } from '../../../../src/modules/feed/components/CardAdsBanner';

describe('<CardAdsBanner />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardAdsBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
