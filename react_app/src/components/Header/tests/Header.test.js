/* eslint no-undef: "off" */
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.length).toEqual(1);
  });
});
