import * as types from '../actions/types';

export const initialState = {
  showAlert: false,
  showMenuModal: false,
  alertBody: {
    title: '',
    type: 'info',
    message: '',
    duration: 6000
  }
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_ALERT:
      return { ...state, showAlert: !state.showAlert };
    case types.TOGGLE_MENU_MODAL:
      return { ...state, showMenuModal: !state.showMenuModal };
    case types.UPDATE_ALERT:
      return { ...state, alertBody: action.payload };
    case types.SET_ALERT:
      return { ...state, showAlert: !state.showAlert, alertBody: action.payload };
    default:
      return state;
  }
}
