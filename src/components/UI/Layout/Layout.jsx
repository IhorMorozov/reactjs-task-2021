import React from "react";
import styles from "./Layout.module.scss";
import classNames from "classnames";

const Layout = (props) => {
  const { children, style = styles.style } = props;
  const container = classNames(styles.container, style);
  return (
    <section className={styles.wrapper}>
      <div className={container}>{children}</div>
    </section>
  );
};

export default Layout;
