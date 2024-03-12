import reactLogo from './assets/react.svg';
import './App.css';

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}
function Content() {
  let posts = [
    {
      id: 1,
      title: "Scott",
      body: "Gutters created woooohoooo",
      image: "nice.png",
    },
    {
      id: 2,
      title: "Scott",
      body: "I need some gutters",
      image: "___",
    },
    {
      id: 3,
      title: "Scott",
      body: "Site made, no gutters though, me sad",
      image: "___",
    },
  ];
  return (
    <>
      <PostsNew />
      <PostsIndex posts={posts} />
    </>
  );
}

function PostsNew() {
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

function PostsIndex(props) {
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

function Footer() {
  return (
    <footer>
      <p>Copyright ∞, try suing me I dare you</p>
    </footer>
  );
}



function App() {
  return (
    <>
      <div>
        <Header />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default App;
