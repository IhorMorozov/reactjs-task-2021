import React from 'react';

const UserItem = (props) => {
  const { user } = props;
  const selectedData = [];
  for (let property in user) {
    if (localStorage.getItem(property.toUpperCase()) === 'true') {
      if (property === 'address') {
        selectedData.push(user[property.toLowerCase()].city);
      } else if (property === 'company') {
        selectedData.push(user[property.toLowerCase()].name);
      } else {
        selectedData.push(user[property.toLowerCase()]);
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
