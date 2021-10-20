import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";

const Modal = (props) => {
  const { children, visible, setVisible } = props;
  const rootClasses = classNames(
    visible ? classNames(styles.modal, styles.active) : classNames(styles.modal)
  );
  return (
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
