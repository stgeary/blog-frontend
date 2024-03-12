import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>

        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>

      </header>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            Post text: <input type= "text" />
          </div>
          <div> 
            Author: <input type="text" />
          </div>
          <button type="Submit">Be judged</button>
        </form>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
      </div>

      <h1>Scott requires gutters, NOWWWW</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 2 *1.72)}>
          count is {count}
        </button>

      </div>
      <footer>
        <p>Copyright ∞, try suing me I dare you</p>
      </footer>
    </>
  )
}

export default App
