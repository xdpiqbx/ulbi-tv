import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>No posts</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
