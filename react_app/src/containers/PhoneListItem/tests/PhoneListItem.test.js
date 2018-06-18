/* eslint no-undef: "off" */
import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PhoneListItem from '../PhoneListItem';
import rootReducer from '../../../reducers';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);


describe('<PhoneListItem />', () => {
  const phone = {
    id: 1, name: 'test_phone_1', image: '', brand: 'test_brand_1', description: 'test_description_1', camera_description: 'test_camera_description_1',
  }

  it('render a phone Item', () => {
    const renderedComponent = shallow(<PhoneListItem phone={phone} selectPhone={() => {}} store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
