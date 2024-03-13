import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"
import axios from "axios";

export function Content() {
    // let name = "Scott"
    let posts = [];

    const handleIndexPosts = () => {
        axios.get("http://localhost:3000/posts.json").then((response) => {
            posts = response.data;
            console.log(posts);
        });
    };
    return (
      <>
        <PostsNew />
        <button onClick = {handleIndexPosts}>Load Posts</button>
        <PostsIndex posts={posts}/>
      </>
    );
  }