import { TOGGLE_ALERT, TOGGLE_MENU_MODAL, UPDATE_ALERT, SET_ALERT } from '../../../../src/modules/navigator/actions/types';
import { toggleAlert, toggleMenuModal, updateAlert, setAlert } from '../../../../src/modules/navigator/actions';

describe('Navigator actions', () => {
  const alert = {};

  it('Should toggle an alert', () => {
    const expectedAction = { type: TOGGLE_ALERT };
    expect(toggleAlert()).toEqual(expectedAction);
  });

  it('Should toggle menu modal', () => {
    const expectedAction = { type: TOGGLE_MENU_MODAL };
    expect(toggleMenuModal()).toEqual(expectedAction);
  });

  it('Should set an alert', () => {
    const expectedAction = {
      type: SET_ALERT,
      payload: alert
    };

    expect(setAlert(alert)).toEqual(expectedAction);
  });

  it('Should update an alert', () => {
    const expectedAction = {
      type: UPDATE_ALERT,
      payload: alert
    };

    expect(updateAlert(alert)).toEqual(expectedAction);
  });

});
