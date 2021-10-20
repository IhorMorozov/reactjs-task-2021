import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {
  const { setQuery, placeholder } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.search}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default Search;
