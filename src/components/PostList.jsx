import PostItem from './PostItem';

const PostList = ({posts, title}) => {
  return(
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} index={index} key={post.id}/>
      ))}
    </div>
  )
}
export default PostList