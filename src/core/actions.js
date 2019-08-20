export const addItemToMainPage = ({ dispatch, payload }) => {
  return dispatch({
    type: 'ADD_ITEM_TO_MAIN',
    payload
  });
};

export const clearMainPage = ({ dispatch }) => {
  return dispatch({
    type: 'CLEAR_MAINPAGE'
  });
};

export const changeLanguaje = ({ dispatch, payload }) => {
  return dispatch({
    type: 'CHANGE_LANGUAJE',
    payload
  });
};

export const saveAddNewItem = ({ dispatch, payload }) => {
  return dispatch({
    type: 'SAVE_ADD_ITEM',
    payload
  });
};

export const eraseAddNewItem = ({ dispatch }) => {
  return dispatch({
    type: 'ERASE_ADD_ITEM'
  });
};

export const organizeMainItemList = ({ dispatch }) => {
  return dispatch({
    type: 'ORGANIZE_MAIN'
  });
};

export const setEarnings = ({ dispatch, payload }) => {
  return dispatch({
    type: 'SET_EARNINGS',
    payload
  })
};
