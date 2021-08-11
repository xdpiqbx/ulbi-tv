import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

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

  const [title, setTitle] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}
