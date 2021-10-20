import React, { useEffect, useState } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import UserList from '../../components/UserList/UserList';
import axios from 'axios';

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(response.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
      <Modal visible={modal} setVisible={setModal}>
        Modal
      </Modal>
      <UserList users={users} />
    </Layout>
  );
};

export default MainPage;
