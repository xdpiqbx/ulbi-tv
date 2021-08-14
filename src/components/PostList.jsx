import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  if(!posts.length){
    return (<h1 style={{ textAlign: 'center' }}>No posts</h1>)
  }
  return(
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} post={post} index={index} key={post.id}/>
      ))}
    </div>
  )
}
export default PostList