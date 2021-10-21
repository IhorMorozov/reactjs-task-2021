import { useMemo } from 'react';

export const useColumns = (columns, query) => {
  return useMemo(() => {
    return columns.filter((column) =>
      column.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [columns, query]);
};
