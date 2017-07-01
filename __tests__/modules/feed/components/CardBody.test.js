import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardBody } from '../../../../src/modules/feed/components/CardBody';

const props = {
  text: 'TEXT'
};

describe('<CardBody />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardBody {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
