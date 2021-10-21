import React from 'react';
import styles from './BoardItem.module.scss';
import {
  setBoardsAction,
  setCurrentBoardAction,
  setCurrentItemAction,
  setSelectedColumnsAction,
} from '../../store/boardsReducer';
import Button from '../UI/Button/Button';

const BoardItem = (props) => {
  const { board, item, options } = props;
  const { dispatch, boards, currentItem, currentBoard } = options;

  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dragStartHandler(e, board, item) {
    dispatch(setCurrentBoardAction(board));
    dispatch(setCurrentItemAction(item));
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
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

  function removeItem(board, item) {
    const currentIndex = board.items.indexOf(item);
    board.items.splice(currentIndex, 1);
    const dropIndex = boards[0].items.length;
    boards[0].items.splice(dropIndex + 1, 0, item);
    localStorage.setItem(item, 'false');
    dispatch(
      setBoardsAction(
        boards.map((b) => {
          if (b.id === 1) {
            return boards[0];
          }
          if (b.id === 2) {
            return board;
          }
          return b;
        })
      )
    );
    dispatch(setSelectedColumnsAction(board.items));
  }
  return (
    <div
      onDragOver={(e) => dragOverHandler(e)}
      onDragStart={(e) => dragStartHandler(e, board, item)}
      onDrop={(e) => dropHandler(e, board, item)}
      draggable={true}
      className={styles.item}
    >
      {item}
      {board.id === 2 && (
        <Button
          style={styles.button}
          buttonHandler={() => removeItem(board, item)}
        >
          &times;
        </Button>
      )}
    </div>
  );
};

export default BoardItem;
