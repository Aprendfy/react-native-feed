import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardBody } from '../../../../src/modules/feed/components/CardBody';
import { feedStub } from '../../../assets/stubs/feedStub';

const props = {
  text: feedStub.body
};

describe('<CardBody />', () => {
  const wrapper = shallow(<CardBody {...props} />);

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
