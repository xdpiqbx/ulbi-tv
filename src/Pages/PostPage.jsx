import { map } from 'bluebird';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

// import s from './PostPage.module.css';
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(
    async (id) => {
      const response = await PostService.getPostById(id);
      setPost(response.data);
    }
  );

  const [fetchPostComments, isCommentLoading, errorComment] =
    useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    });

  useEffect(() => {
    fetchPostById(id);
    fetchPostComments(id);
  }, []);

  console.log(comments);

  return (
    <div className="App">
      <h1>POST Page {id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post?.id} {post?.title}
        </div>
      )}
      <h2>Comments</h2>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <ul>
          {comments.map((comm) => (
            <li
              key={comm.id}
              style={{
                marginTop: '15px',
                border: '1px solid teal',
                padding: '5px',
              }}
            >
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PostPage;
