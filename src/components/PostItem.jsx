import { useHistory } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post, remove }) => {
  const { id, title, body } = post;
  const router = useHistory();
  return (
    <div className="post" data-id={id}>
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${id}`)}>
          Открыть
        </MyButton>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
