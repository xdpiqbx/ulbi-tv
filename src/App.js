import React, { useEffect, useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import { usePagination } from './hooks/usePagination';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    selectedSort: '',
    searchQuery: '',
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pagesArray = usePagination(totalPages);

  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectedSort,
    filter.searchQuery
  );

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  //// !!!!
  //// https://youtu.be/GNrdg3PzpJQ?t=7555

  const changePage = (page) => {
    setPage(page);
    fetchPosts();
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
      {isPostsLoading ? (
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
      <div className="page__wrapper">
        {pagesArray.map((p) => {
          return (
            <span
              onClick={() => changePage(p)}
              className={p === page ? 'page  page__current' : 'page'}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
}
