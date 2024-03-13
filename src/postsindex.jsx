/* eslint-disable no-undef */
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
  PostsIndex.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        // eslint-disable-next-line no-undef
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };