import { fetchUsersAction } from '../usersReducer';
import { setBoardsAction, setSelectedColumnsAction } from '../boardsReducer';

export const fetchUsers = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchUsersAction(data));
        const columns = Object.keys(data[0]).map((column) =>
          column.toUpperCase()
        );
        const selectedColumns = columns.filter((column, index) => index < 4);
        const availableColumns = columns.filter((column, index) => index >= 4);
        dispatch(
          setBoardsAction([
            {
              id: 1,
              title: 'Available Columns',
              items: availableColumns,
            },
            {
              id: 2,
              title: 'Selected Columns',
              items: selectedColumns,
            },
          ])
        );
        dispatch(setSelectedColumnsAction(selectedColumns));
      });
  };
};
