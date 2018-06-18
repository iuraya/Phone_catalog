/* eslint no-undef: "warn" */
import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers';
import PhoneDetail from '../PhoneDetail';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);


describe('<PhoneDetail />', () => {
  const currentPhone = {
    id: 1, name: 'test_phone_1', image: '', brand: 'test_brand_1', description: 'test_description_1', camera_description: 'test_camera_description_1',
  }

  it('render a list of phones', () => {
    const renderedComponent = shallow(<PhoneDetail currentPhone={currentPhone} store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
