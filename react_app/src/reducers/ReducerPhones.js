import {
  UPDATE_PHONES_LIST,
  SELECT_PHONE,
  UPDATE_LOADING,
} from '../actions/ActionsPhones';

const initialState = {
  phonesList: null,
  currentPhone: null,
  loading: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PHONES_LIST:
      return {
        ...state,
        phonesList: action.value,
      }

    case SELECT_PHONE:
      return {
        ...state,
        currentPhone: action.value,
      }

    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
};
