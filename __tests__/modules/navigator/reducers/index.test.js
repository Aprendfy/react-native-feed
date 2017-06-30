import { toggleAlert, toggleMenuModal, updateAlert, setAlert } from '../../../../src/modules/navigator/actions';
import Reducer, { initialState } from '../../../../src/modules/navigator/reducers';

describe('Navigator reducers', () => {

  const alert = {
    title: 'Test',
    type: 'test',
    message: 'testing',
    duration: 10
  };

  it('Should have an empty feed array as initial state', () => {
    const expectedInitialState = {
      showAlert: false,
      showMenuModal: false,
      alertBody: {
        title: '',
        type: 'info',
        message: '',
        duration: 6000
      }
    };

    expect(Reducer(initialState, {})).toEqual(expectedInitialState);
  });

  it('Should toggle an alert', () => {
    const action = toggleAlert();
    const expectedState = { ...initialState, ...{ showAlert: !initialState.showAlert } };

    expect(Reducer(initialState, action)).toEqual(expectedState);
  });

  it('Should toggle menu modal', () => {
    const action = toggleMenuModal();
    const expectedState = { ...initialState, ...{ showMenuModal: !initialState.showMenuModal } };

    expect(Reducer(initialState, action)).toEqual(expectedState);
  });

  it('Should set an alert', () => {
    const action = setAlert(alert);
    const expectedState = { ...initialState, showAlert: !initialState.showAlert, alertBody: action.payload };

    expect(Reducer(initialState, action)).toEqual(expectedState);
  });

  it('Should update an alert', () => {
    const action = updateAlert(alert);
    const expectedState = { ...initialState, alertBody: action.payload };

    expect(Reducer(initialState, action)).toEqual(expectedState);
  });
});

