import React from 'react';
import PhoneList from '../../containers/PhoneList';
import PhoneDetail from '../../containers/PhoneDetail';
import Header from '../Header';
import './style.scss';


const App = () => (
  <div className="app-wrapper">
    <Header />
    <PhoneList />
    <PhoneDetail />
  </div>
);

export default App;
