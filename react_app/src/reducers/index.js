import { combineReducers } from 'redux';
import ReducerPhones from './ReducerPhones';


const allReducers = combineReducers({
  phones: ReducerPhones,
});

export default allReducers
