export function PostsNew() {
    return (
      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            Post text: <input type="text" />
          </div>
          <div> 
            Author: <input type="text" />
          </div>
          <button type="submit">Be judged</button>
        </form>
      </div>
    );
  }