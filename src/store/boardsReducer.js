const defaultState = {
  boards: [
    {
      id: 1,
      title: 'Available Columns',
      items: ['ADDRESS', 'PHONE', 'WEBSITE', 'COMPANY'],
    },
    {
      id: 2,
      title: 'Selected Columns',
      items: ['ID', 'NAME', 'USERNAME', 'EMAIL'],
    },
  ],
  currentBoard: null,
  currentItem: null,
};

const SET_CURRENT_BOARD = 'SET_CURRENT_BOARD';
const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
const SET_BOARDS = 'SET_BOARDS';

export const boardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case SET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrentBoardAction = (payload) => ({
  type: SET_CURRENT_BOARD,
  payload,
});
export const setCurrentItemAction = (payload) => ({
  type: SET_CURRENT_ITEM,
  payload,
});
export const setBoardsAction = (payload) => ({
  type: SET_BOARDS,
  payload,
});
