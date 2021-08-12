import MyButton from "./UI/button/MyButton"

const PostItem = ({post, index, remove}) => {
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
        <MyButton onClick={()=>remove(id)}>Delete post</MyButton>
      </div>
    </div>
  )
}
export default PostItem