import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames';

const Search = (props) => {
  const { setQuery, placeholder, style } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(styles.search, style)}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default Search;
