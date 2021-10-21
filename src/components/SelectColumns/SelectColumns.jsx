import React, { useMemo, useState } from 'react';
import Layout from '../UI/Layout/Layout';
import styles from './SelectColumns.module.scss';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../Board/Board';
import { setBoardsAction } from '../../store/boardsReducer';

const SelectColumns = (props) => {
  const { setVisible } = props;
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardsReducer.boards);
  const currentBoard = useSelector((state) => state.boardsReducer.currentBoard);
  const currentItem = useSelector((state) => state.boardsReducer.currentItem);
  const columns = useSelector((state) => state.usersReducer.columns);
  const selectedColumns = useSelector(
    (state) => state.boardsReducer.selectedColumns
  );
  const options = { dispatch, boards, currentItem, currentBoard };
  useMemo(() => {
    if (boards.length > 1) {
      const availableColumns = columns.filter(
        (column) => !selectedColumns.includes(column)
      );
      const searchedColumns = availableColumns.filter((column) =>
        column.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(
        setBoardsAction(
          boards.map((b) => {
            if (b.id === 1) {
              return { ...b, items: searchedColumns };
            }
            return b;
          })
        )
      );
    }
  }, [query]);
  const applySelection = () => {
    setVisible(false);
    setQuery('');
  };

  return (
    <Layout style={styles.layout}>
      <Search
        placeholder="Search available columns..."
        style={styles.search}
        query={query}
        setQuery={setQuery}
      />
      <div className={styles.boardsWrapper}>
        {boards.map((board) => (
          <Board board={board} options={options} key={board.title} />
        ))}
      </div>
      <Button style={styles.button} buttonHandler={() => applySelection()}>
        Apply
      </Button>
    </Layout>
  );
};

export default SelectColumns;
