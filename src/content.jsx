import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";
import {Modal} from "./Modal"
import {PostsShow} from "./PostsShow";

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

      const handleCreatePost = (params) => {
        axios.post("http://localhost:3000/posts.json", params).then((response) => {
            setPosts([...posts, response.data]);
        });
      }
    useEffect(handleIndexPosts, []);

    return (
        <>
        <PostsNew onCreatePost={handleCreatePost}/>
        <PostsIndex posts={posts} onShowPost={handleShowPost}/>
        <Modal show={isPostsShowVisible} onClose={handleClose}>
            <PostsShow post = {currentPost} />
      </Modal>
      </>
    );
  }