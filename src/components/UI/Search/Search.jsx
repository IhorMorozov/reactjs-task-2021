import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames';

const Search = (props) => {
  const { setQuery, query, placeholder, style } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      className={classNames(styles.search, style)}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default Search;
