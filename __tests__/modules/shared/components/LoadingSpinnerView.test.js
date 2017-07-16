import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import { LoadingSpinnerView } from '../../../../src/modules/shared/components/LoadingSpinnerView';

const props = {
  isLoading: true,
  children: <View />
};

describe('<LoadingSpinnerView />', () => {

  it('Should have a snapshot', () => {
    const wrapper = shallow(<LoadingSpinnerView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

//  TODO: Testar se o children component está sendo renderizado
});
