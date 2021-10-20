import React from "react";
import UserItem from "../UserItem/UserItem";
import "./UserList.module.scss";

const UserList = () => {
  const users = [
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
    { name: "Ihor", age: 19, surname: "Morozov", color: "purple" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem user={user} key={user.name} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
