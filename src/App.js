import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import MySelect from './components/UI/select/MySelect';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 2,
      title: 'React',
      body: 'React - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
    {
      id: 1,
      title: 'Javascript',
      body: 'Javascript - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      })
    );

    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        options={[
          {
            value: 'title',
            title: 'По названию',
          },
          {
            value: 'body',
            title: 'По описанию',
          },
        ]}
        defaultValue="Сортировка по"
        value={selectedSort}
        onChange={sortPosts}
      />

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
