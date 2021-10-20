import React, { useState } from "react";
import Layout from "../../components/UI/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import UserList from "../../components/UserList/UserList";

const MainPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <Layout>
      <Button buttonHandler={() => setModal(true)}>Select Columns</Button>
      <Modal visible={modal} setVisible={setModal}>
        Modal
      </Modal>
      <UserList />
    </Layout>
  );
};

export default MainPage;
