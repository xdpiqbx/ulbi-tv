import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

export default function App() {
  const [posts, setPosts] = useState([]);
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

  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsPostLoading(true);
    setTimeout(async () => {
      setPosts(await PostService.getAll());
      setIsPostLoading(false);
    }, 1000);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <hr style={{ margin: '15px 0' }} />
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
      {isPostLoading ? (
        // <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов JS"
          remove={removePost}
        />
      )}
    </div>
  );
}
