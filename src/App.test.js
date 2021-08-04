import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

describe('snapshot testing', () => {

  test('snapshot for App Components', () => {
  
    const renderdComponent = renderer.create(<App />).toJSON()
    expect(renderdComponent).toMatchSnapshot()
})

})
