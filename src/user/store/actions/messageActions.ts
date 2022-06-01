export const messageActions = {
  SET_MESSAGE: '[MESSAGE] set message',
  CHANGE_MODAL_STATE: '[MESSAGE] change modal state',
};

export const setMessage = (message: string) => ({
  type: messageActions.SET_MESSAGE,
  payload: message,
});

export const changeModalState = (state: boolean) => ({
  type: messageActions.CHANGE_MODAL_STATE,
  payload: state,
});
