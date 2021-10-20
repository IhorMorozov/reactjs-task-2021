import React from "react";

const UserItem = (props) => {
  const { user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>

      <td>{user.age}</td>
      <td>{user.color}</td>
    </tr>
  );
};

export default UserItem;
