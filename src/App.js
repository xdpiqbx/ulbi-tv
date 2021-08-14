import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import { data } from './data';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

export default function App() {
  const [posts, setPosts] = useState(data());
  const [filter, setFilter] = useState({
    selectedSort: '',
    searchQuery: '',
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectedSort,
    filter.searchQuery
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => {
          setVisibleModal(true);
        }}
      >
        Создать пост
      </MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов JS"
        remove={removePost}
      />
    </div>
  );
}
