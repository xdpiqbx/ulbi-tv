import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  ref,
  canLoad,
  isLoading,
  callback
) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const action = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(action);
    observer.current.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};

// useEffect(() => {
//   if (isPostsLoading) return;
//   if (observer.current) observer.current.disconnect();

//   const callback = function (entries, observer) {
//     if (entries[0].isIntersecting && page < totalPages) {
//       console.log(page);
//       setPage(page + 1);
//     }
//   };

//   observer.current = new IntersectionObserver(callback);
//   observer.current.observe(lastElement.current);
// }, [isPostsLoading]);
