import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
  const { children, newStyle, buttonHandler } = props;
  const buttonStyle = classNames(styles.button, newStyle)
  return (
    <button className={buttonStyle} onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default Button;
