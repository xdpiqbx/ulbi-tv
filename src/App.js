import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import { data } from './data';
import PostFilter from './components/PostFilter';

export default function App() {
  const [posts, setPosts] = useState(data());

  const [filter, setFilter] = useState({
    selectedSort: '',
    searchQuery: '',
  });

  function getSortedPosts() {
    console.log('===->>> getSortedPosts()');
    if (filter.selectedSort) {
      return [...posts].sort((a, b) => {
        return a[filter.selectedSort].localeCompare(
          b[filter.selectedSort]
        );
      });
    }
    return posts;
  }

  const sortedPosts = useMemo(() => {
    return getSortedPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.searchQuery)
    );
  }, [filter.searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов JS"
          remove={removePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
}
