const PostItem = ({post, index}) => {
  const {id, title, body} = post
  return(
    <div className="post" data-id={id}>
      <div className="post__content">
        <strong>{index + 1}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <button>Delete post</button>
      </div>
    </div>
  )
}
export default PostItem