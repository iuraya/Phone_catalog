/* eslint no-undef: "warn" */
import {
  UPDATE_PHONES_LIST,
  SELECT_PHONE,
  UPDATE_LOADING,
  selectPhone,
  updatePhonesList,
  updateLoading,
} from '../../actions/ActionsPhones';


describe('App Actions', () => {
  describe('selectPhone', () => {
    it('should return the correct type', () => {
      const phone = { id: 1, name: 'test_phone' }
      const expectedResult = {
        type: SELECT_PHONE,
        value: phone,
      };
      expect(selectPhone(phone)).toEqual(expectedResult);
    });
  });

  describe('updatePhonesList', () => {
    it('should return the correct type and the passed repos', () => {
      const phonesList = [{ id: 1, name: 'test_phone_1' }, { id: 2, name: 'test_phone_2' }]
      const expectedResult = {
        type: UPDATE_PHONES_LIST,
        value: phonesList,
      };
      expect(updatePhonesList(phonesList)).toEqual(expectedResult);
    });
  });

  describe('updateLoading', () => {
    it('should return the correct type and the error', () => {
      const loading = true
      const expectedResult = {
        type: UPDATE_LOADING,
        value: loading,
      };
      expect(updateLoading(loading)).toEqual(expectedResult);
    });
  });
});
