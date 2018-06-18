/* global fetch */
export const UPDATE_PHONES_LIST = 'phones/UPDATE_PHONES_LIST';
export const SELECT_PHONE = 'phones/SELECT_PHONE';
export const UPDATE_LOADING = 'phones/UPDATE_LOADING';


/*
 * Update the current phone selected
 */
export const selectPhone = (phone) => {
  // console.log('You clicked on phone: ', phone.name);
  return {
    type: SELECT_PHONE,
    value: phone,
  }
};

/*
 * Update the complete list of phones
 */
export const updatePhonesList = (phonesList) => {
  return {
    type: UPDATE_PHONES_LIST,
    value: phonesList,
  }
};

/*
 * Update loading flag
 */
export const updateLoading = (loading) => {
  return {
    type: UPDATE_LOADING,
    value: loading,
  }
};


/*
 * Load of the phones list
 */
export const loadPhones = () => (dispatch) => {
  // Start loading indicator
  dispatch(updateLoading(true))

  const requestURL = 'http://localhost:8080/phones/';

  // return fetch(requestURL, request)
  return fetch(requestURL)
    .then(response => response.json())
    .then(responseObject => {
      // Stop loading indicator
      dispatch(updateLoading(false))
      // Update the phones list received
      dispatch(updatePhonesList(responseObject))
    })
    .catch(error => console.log(error));
}
