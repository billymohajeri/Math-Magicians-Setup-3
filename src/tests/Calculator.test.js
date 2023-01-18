import React from 'react';
import renderer from 'react-test-renderer'
import Calc from '../components/Calculator';

it('renders correctly', () => {
  const calculator = renderer
    .create(<Calc />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});