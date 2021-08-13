import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import MySelect from './components/UI/select/MySelect';

import { data } from './data';
import MyInput from './components/UI/input/MyInput';

export default function App() {
  const [posts, setPosts] = useState(data());

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('===->>> getSortedPosts()');
    if (selectedSort) {
      return [...posts].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort]);
      });
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
          posts={sortedPosts}
          title="Список постов JS"
          remove={removePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
}
