import React, { useEffect, useState } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import UserList from '../../components/UserList/UserList';
import axios from 'axios';
import SelectColumns from '../../components/SelectColumns/SelectColumns';

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const isUserListExist = users.length > 1;

  async function fetchUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(response.data);
  }
  useEffect(() => {
    fetchUsers();
    localStorage.clear();
  }, []);

  const getColumns = (users) => {
    if (isUserListExist) {
      return Object.keys(users[0]).map((column) => column.toUpperCase());
    }
    return null;
  };
  if (isUserListExist) {
    getColumns(users).map((column) => {
      localStorage.setItem(column, localStorage.getItem(column) || 'false');
    });
  }

  return (
    <Layout>
      <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
      <Modal visible={modal} setVisible={setModal}>
        <SelectColumns
          columns={getColumns(users)}
          isUserListExist={isUserListExist}
          setVisible={setModal}
        />
      </Modal>
      <UserList
        users={users}
        columns={getColumns(users)}
        isUserListExist={isUserListExist}
      />
    </Layout>
  );
};

export default MainPage;
