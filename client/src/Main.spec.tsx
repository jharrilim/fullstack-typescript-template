import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main';

describe('<Main />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});