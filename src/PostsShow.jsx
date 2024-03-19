/* eslint-disable react/prop-types */
export function PostsShow(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdatePost(props.post.id, params);
        event.target.reset();
      };
    
      const handleClick = () => {
        props.onDestroyPost(props.post.id);
      };
    return (
    <>
      <div id="posts-show">
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <p>{props.post.image}</p>
      </div>

    <h2>Edit this post!</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input defaultValue={props.post.title} name="author" type="text" />
        </div>
        <div>
            <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <div>
            <input defaultValue={props.post.body} name="body" type="text" />
        </div>
  
        <button type="submit">Update post</button>
        </form>
            <button onClick={handleClick}>Delete post</button>
    </>
);
}