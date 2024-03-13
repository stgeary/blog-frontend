/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function PostsIndex(props) {
    console.log(props);
  
    return (
        <div id="posts-index">
        <h2>{props.name}</h2>
        <h1>All posts</h1>
        <div className="cards">
          {props.posts.map((post) => (
            <div key={post.id} className="posts card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img src={post.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
