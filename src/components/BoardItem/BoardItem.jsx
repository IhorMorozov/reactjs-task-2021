import React from 'react';
import styles from './BoardItem.module.scss';
import {
  setBoardsAction,
  setCurrentBoardAction,
  setCurrentItemAction,
} from '../../store/boardsReducer';

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
    </div>
  );
};

export default BoardItem;
