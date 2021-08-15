import React, { useEffect, useState } from 'react';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';

import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/Pagination/Pagination';

import PostService from '../API/PostService';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';

import { getPageCount } from '../utils/pages';

import '../styles/App.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    selectedSort: '',
    searchQuery: '',
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // (setLimit) newer use
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectedSort,
    filter.searchQuery
  );

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]); // ---------------->>> https://youtu.be/GNrdg3PzpJQ?t=10089
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {postError && (
        <>
          <h1>Произошла ошибка</h1>
          <p>{postError}</p>
        </>
      )}
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов JS"
        remove={removePost}
      />
      {isPostsLoading && (
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
      )}
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}
