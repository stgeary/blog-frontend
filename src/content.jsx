import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"
import axios from "axios";
import { useState } from "react";

export function Content() {
    // let name = "Scott"
    
    // let posts = [];

    // let posts = [
    //     {
    //       id: 1,
    //       title: "___",
    //       body: "___",
    //       image: "___",
    //     },
    //     {
    //       id: 2,
    //       title: "___",
    //       body: "___",
    //       image: "___",
    //     },
    //     {
    //       id: 3,
    //       title: "___",
    //       body: "___",
    //       image: "___",
    //     },
    //   ];

    
    const [posts, setPosts] = useState([]);

    const handleIndexPosts = () => {
        axios.get("http://localhost:3000/posts.json").then((response) => {
            setPosts(response.data);
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