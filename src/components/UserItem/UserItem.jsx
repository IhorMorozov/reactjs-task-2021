import React from 'react';

const UserItem = (props) => {
  const { user } = props;
  const selectedData = [];
  for (let column in user) {
    if (localStorage.getItem(column.toUpperCase()) === 'true') {
      if (column === 'address') {
        selectedData.push(user[column.toLowerCase()].city);
      } else if (column === 'company') {
        selectedData.push(user[column.toLowerCase()].name);
      } else {
        selectedData.push(user[column.toLowerCase()]);
      }
    }
  }

  return (
    <tr>
      {selectedData.map((data) => (
        <td key={data}>{data}</td>
      ))}
    </tr>
  );
};

export default UserItem;
