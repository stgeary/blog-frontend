export function PostsNew() {
    return (
      <div id="posts-new">
        <h1>New post</h1>
        <form method="POST" action="http://localhost:3000/recipes.json">
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