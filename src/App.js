import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      body: 'Javascript - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
    {
      id: 2,
      title: 'React',
      body: 'React - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList
          posts={posts}
          title="Список постов JS"
          remove={removePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
}
