/* eslint no-undef: "warn" */
import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PhoneList from '../PhoneList';
import rootReducer from '../../../reducers';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);


describe('<PhoneList />', () => {
  const phones = [
    {
      id: 1, name: 'test_phone_1', image: '', brand: 'test_brand_1', description: 'test_description_1', camera_description: 'test_camera_description_1',
    },
    {
      id: 2, name: 'test_phone_2', image: '', brand: 'test_brand_2', description: 'test_description_2', camera_description: 'test_camera_description_2',
    },
  ];

  it('render a list of phones', () => {
    const renderedComponent = shallow(<PhoneList loading={false} phones={phones} loadPhones={() => {}} store={store} />);
    // console.log(renderedComponent.debug());
    // expect(renderedComponent.contains(a)).toEqual(true);
    expect(renderedComponent).toMatchSnapshot();
  });
});
