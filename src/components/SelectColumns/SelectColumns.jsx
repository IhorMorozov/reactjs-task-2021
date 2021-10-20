import React, { useState } from 'react';
import Layout from '../UI/Layout/Layout';
import styles from './SelectColumns.module.scss';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';

const SelectColumns = (props) => {
  const { columns, isUserListExist, setVisible } = props;
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Available Columns',
      items: ['test1', 'test2'],
    },
    {
      id: 2,
      title: 'Selected Columns',
      items: ['test3', 'test4'],
    },
  ]);

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragLeaveHandler(e) {}

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {}

  function dropHandler(e, board, item) {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function dropOnBoardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  return (
    <Layout style={styles.layoutWidth}>
      <Search placeholder="Search available columns..." style={styles.search} />
      <div className={styles.wrapper}>
        {boards.map((board) => (
          <div
            className={styles.board}
            key={board.title}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropOnBoardHandler(e, board)}
          >
            <h3 className={styles.boardTitle}>{board.title}</h3>
            {board.items.map((item) => (
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable={true}
                className={styles.item}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button style={styles.button} buttonHandler={() => setVisible(false)}>
        Apply
      </Button>
    </Layout>
  );
};

export default SelectColumns;
