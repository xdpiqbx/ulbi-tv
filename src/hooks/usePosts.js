import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
  function getSortedPosts() {
    console.log('===->>> Hook useSortedPosts()');
    if (sort) {
      return [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      });
    }
    return posts;
  }

  const sortedPosts = useMemo(() => {
    return getSortedPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
