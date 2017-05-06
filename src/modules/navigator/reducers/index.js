import * as types from '../actions/types';
import * as navigator from './reducers';

const initialState = {
  showAlert: false,
  showMenuModal: false,
  alertBody: {
    title: '',
    type: 'info',
    message: '',
    duration: 6000
  },
  alertData: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_ALERT:
      return navigator.toggleAlert(state, action);
    case types.TOGGLE_MENU_MODAL:
      return navigator.toggleModal(state, action);
    case types.UPDATE_ALERT:
      return navigator.updateAlert(state, action);
    case types.SET_ALERT:
      return navigator.setAlert(state, action);
    default:
      return state;
  }
}
