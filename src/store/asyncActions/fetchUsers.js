import { fetchUsersAction } from '../usersReducer';

export const fetchUsers = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(fetchUsersAction(data)));
  };
};
