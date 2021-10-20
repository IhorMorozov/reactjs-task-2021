import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
  const { children, style, buttonHandler } = props;
  const buttonStyle = classNames(styles.button, style);
  return (
    <button className={buttonStyle} onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default Button;
