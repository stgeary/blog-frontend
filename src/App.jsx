import reactLogo from './assets/react.svg';
import './App.css';

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
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
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* <p>The name is {props.name}</p> */}
      <div className="posts">
        <h2>Scott</h2>
        <p>I GOT SOME GUTTERS IN HERE WOOOHOOOOOO</p>
      </div>
      <div className="posts">
        <h2>Scott</h2>
        <p>I need gutters NOWWWWWWW</p>
      </div>
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

function Content() {
  let name = "Test";
  return (
    <>
      <PostsNew />
      <PostsIndex name={name} />
    </>
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
