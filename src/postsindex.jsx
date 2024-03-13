export function PostsIndex(props) {
    console.log(props);
  
    return (
      <div>
        {/* Use map function with props.posts to create the posts dynamically */}
        {props.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
      </div>
    );
  }