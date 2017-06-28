import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index.ios';

it('renders correctly', () => {
  renderer.create(
    <Index />
  );
});
