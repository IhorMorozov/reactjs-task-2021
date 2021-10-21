const defaultState = {
  users: [],
  columns: [],
};

const FETCH_USERS = 'FETCH_USERS';

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload],
        columns: Object.keys(action.payload[0]).map((column) =>
          column.toUpperCase()
        ),
      };
    default:
      return state;
  }
};

export const fetchUsersAction = (payload) => ({ type: FETCH_USERS, payload });
