import React from 'react';

const UserItem = (props) => {
  const { user } = props;
  const selectedData = [];
  for (let column in user) {
    if (localStorage.getItem(column) === 'true') {
      if (column === 'address') {
        selectedData.push(user[column].city);
      } else if (column === 'company') {
        selectedData.push(user[column].name);
      } else {
        selectedData.push(user[column]);
      }
    }
  }

  return (
    <tr>
      {selectedData.map((data) => (
        <td>{data}</td>
      ))}
    </tr>
  );
};

export default UserItem;
