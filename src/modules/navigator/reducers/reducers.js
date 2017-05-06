export function toggleAlert(state) {
  return { ...state, ...{ showAlert: !state.showAlert } };
}

export function toggleModal(state) {
  return { ...state, ...{ showMenuModal: !state.showMenuModal } };
}

export function updateAlert(state, action) {
  const { title, type, message, duration } = action.payload;
  return { ...state,
    ...{
      alertBody: {
        title,
        type,
        message,
        duration
      }
    } };
}

export function setAlert(state, action) {
  const { title, type, message, duration } = action.payload;
  return { ...state,
    ...{
      alertBody: {
        title,
        type,
        message,
        duration
      },
      showAlert: !state.showAlert
    }
  };
}
