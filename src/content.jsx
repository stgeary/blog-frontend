import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";
import {Modal} from "./Modal"

export function Content() {
    const [posts, setPosts] = useState([]);
    const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

    const handleIndexPosts = () => {
        axios.get("http://localhost:3000/posts.json").then((response) => {
            setPosts(response.data);
            console.log(posts);
        });
    };

    const handleShowPost = () => {
        setIsPostsShowVisible(true);
    }

    const handleClose = () => {
        setIsPostsShowVisible(false);
      };

    useEffect(handleIndexPosts, []);

    return (
        <>
        <PostsNew />
        {/* <button onClick = {handleIndexPosts}>Load Posts</button> */}
        <PostsIndex posts={posts} onShowPost={handleShowPost}/>
        <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h1>TEST</h1>
      </Modal>
      </>
    );
  }