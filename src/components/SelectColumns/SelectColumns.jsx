import React, { useState } from 'react';
import Layout from '../UI/Layout/Layout';
import styles from './SelectColumns.module.scss';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../Board/Board';

const SelectColumns = (props) => {
  const { setVisible } = props;
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardsReducer.boards);
  const currentBoard = useSelector((state) => state.boardsReducer.currentBoard);
  const currentItem = useSelector((state) => state.boardsReducer.currentItem);
  const options = { dispatch, boards, currentItem, currentBoard };

  return (
    <Layout style={styles.layout}>
      <Search
        placeholder="Search available columns..."
        style={styles.search}
        setQuery={setQuery}
      />
      <div className={styles.boardsWrapper}>
        {boards.map((board) => (
          <Board board={board} options={options} key={board.title} />
        ))}
      </div>
      <Button style={styles.button} buttonHandler={() => setVisible(false)}>
        Apply
      </Button>
    </Layout>
  );
};

export default SelectColumns;
