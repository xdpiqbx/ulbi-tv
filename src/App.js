import React from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <PostItem
        post={{
          id: 1,
          title: 'Javascript',
          body: 'Javascript - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
        }}
      />
    </div>
  );
}
