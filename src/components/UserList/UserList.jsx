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
            columns.map((column) => {
              if (localStorage.getItem(column) === 'true') {
                return <th key={column}>{column}</th>;
              }
            })}
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
