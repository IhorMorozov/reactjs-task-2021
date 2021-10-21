import React from 'react';
import styles from './Board.module.scss';
import {
  setBoardsAction,
  setSelectedColumnsAction,
} from '../../store/boardsReducer';
import BoardItem from '../BoardItem/BoardItem';

const Board = (props) => {
  const { board, options } = props;
  const { dispatch, boards, currentItem, currentBoard } = options;

  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dropOnBoardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    if (board.id === 1) {
      localStorage.setItem(currentItem, 'false');
    } else {
      localStorage.setItem(currentItem, 'true');
    }
    dispatch(
      setBoardsAction(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      )
    );
    if (board.id === 1) {
      dispatch(setSelectedColumnsAction(currentBoard.items));
    } else {
      dispatch(setSelectedColumnsAction(board.items));
    }
  }
  return (
    <div
      className={styles.board}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropOnBoardHandler(e, board)}
    >
      <h3 className={styles.boardTitle}>{board.title}</h3>
      {board.items.map((item) => (
        <BoardItem item={item} options={options} board={board} key={item} />
      ))}
    </div>
  );
};

export default Board;
