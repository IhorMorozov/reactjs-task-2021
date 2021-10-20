import React from 'react';
import UserItem from '../UserItem/UserItem';
import './UserList.module.scss';

const UserList = (props) => {
  const { users } = props;
  const isUserListExist = users.length > 1;
  const getColumns = (users) => {
    if (isUserListExist) {
      return Object.keys(users[0]);
    }
    return null;
  };
  if (isUserListExist) {
    getColumns(users).map((column) => {
      localStorage.setItem(column, localStorage.getItem(column) || 'true');
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {isUserListExist &&
            getColumns(users).map((key) => (
              <th key={key}>{key.toUpperCase()}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {isUserListExist &&
          users.map((user) => <UserItem user={user} key={user.id} />)}
      </tbody>
    </table>
  );
};

export default UserList;
