/* eslint no-undef: "off" */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../../Header';
import PhoneList from '../../../containers/PhoneList';
import PhoneDetail from '../../../containers/PhoneDetail'


describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toBe(1);
  });

  it('should render the phones list', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(PhoneList).length).not.toBe(0);
  });

  it('should render the phone detail', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(PhoneDetail).length).toBe(1);
  });
});
