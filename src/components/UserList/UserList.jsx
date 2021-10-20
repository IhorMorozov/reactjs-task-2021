import React from 'react';
import UserItem from '../UserItem/UserItem';
import './UserList.module.scss';

const UserList = (props) => {
  const { users, columns, isUserListExist } = props;

  return (
    <table>
      <thead>
        <tr>
          {isUserListExist &&
            columns.map((column) => (
              <th key={column}>{column.toUpperCase()}</th>
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
