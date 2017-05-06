import { TOGGLE_ALERT, UPDATE_ALERT, SET_ALERT, TOGGLE_MENU_MODAL } from './types';

export function toggleAlert() {
  return { type: TOGGLE_ALERT };
}

export function toggleMenuModal() {
  return { type: TOGGLE_MENU_MODAL };
}

export function updateAlert(payload) {
  return { type: UPDATE_ALERT, payload };
}

export function setAlert(payload) {
  return { type: SET_ALERT, payload };
}
