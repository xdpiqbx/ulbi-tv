import { useMemo } from 'react';

export const usePagination = (totalPages) => {
  let pagesArray = [];
  return useMemo(() => {
    for (let i = 0; i < totalPages; i += 1) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);
};
