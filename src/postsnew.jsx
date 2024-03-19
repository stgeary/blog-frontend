export function PostsNew() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("yo"); // hello???
        const params = new FormData(event.target);
        props.onCreatePost(params);
        event.target.reset();
    }
    return (
      <div id="posts-new">
        <h1>New post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Post text: <input type="text" />
          </div>
          <div> 
            Author: <input type="text" />
          </div>
          <div>
            Image: <input type="text" />
          </div>
          <button type="submit">Post and be judged</button>
        </form>
      </div>
    );
  }