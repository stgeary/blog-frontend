/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function PostsIndex(props) {
    console.log(props);
  
    return (
      <div>
        {props.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
            <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <h2>{post.title}</h2>
            <img src={post.image_url} alt="" />
            <p>Author:{post.Author} </p>
            <button>More info</button>
          </div>
        ))}
      </div>
      </div>
    );
  }
