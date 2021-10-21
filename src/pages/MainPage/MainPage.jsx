import React, { useEffect, useState } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import UserList from '../../components/UserList/UserList';
import SelectColumns from '../../components/SelectColumns/SelectColumns';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/asyncActions/fetchUsers';

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const columns = useSelector((state) => state.usersReducer.columns);
  const isUserListExist = users.length > 1;
  useEffect(() => {
    dispatch(fetchUsers());
    localStorage.clear();
  }, []);
  if (isUserListExist) {
    columns.forEach((column, index) => {
      if (index < 4) {
        localStorage.setItem(column, localStorage.getItem(column) || 'true');
      } else {
        localStorage.setItem(column, localStorage.getItem(column) || 'false');
      }
    });
  }

  return (
    <Layout>
      <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
      <Modal visible={modal} setVisible={setModal}>
        <SelectColumns
          columns={columns}
          isUserListExist={isUserListExist}
          setVisible={setModal}
        />
      </Modal>
      <UserList
        users={users}
        columns={columns}
        isUserListExist={isUserListExist}
      />
    </Layout>
  );
};

export default MainPage;
