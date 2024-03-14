import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";
import {Modal} from "./Modal"

export function Content() {
    const [posts, setPosts] = useState([]);
    const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const handleIndexPosts = () => {
        axios.get("http://localhost:3000/posts.json").then((response) => {
            setPosts(response.data);
            console.log(posts);
        });
    };

    const handleShowPost = (post) => {
        setIsPostsShowVisible(true);
        setCurrentPost(post);
    }

    const handleClose = () => {
        setIsPostsShowVisible(false);
      };

    useEffect(handleIndexPosts, []);

    return (
        <>
        <PostsNew />
        <PostsIndex posts={posts} onShowPost={handleShowPost}/>
        <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>{currentPost.title}</h2>
        <p>{currentPost.body}</p>
        <p>ingredients: {currentPost.image}</p>
        {/* <p>directions: {currentPost.directions}</p> */}
      </Modal>
      </>
    );
  }