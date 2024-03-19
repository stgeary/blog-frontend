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
      
    const handleUpdatePost = (id, params) => {
        axios.patch("http://localhost:3000/posts/" + id + ".json", params).then((response) => {
          setPosts(
            posts.map((post) => {
              if (post.id === response.data.id) {
                return response.data;
              } else {
                return post;
              }
            })
          );
        });
      };
    const handleDestroyPost = (id) => {
        // eslint-disable-next-line no-unused-vars
        axios.delete("http://localhost:3000/posts/" + id + ".json", id).then((response) => {
            setPosts(posts.filter((post) => post.id !== id));
            handleClose();
          });
    };
    useEffect(handleIndexPosts, []);

    return (
        <>
        <PostsNew onCreatePost={handleCreatePost}/>
        <PostsIndex posts={posts} onShowPost={handleShowPost}/>
        <Modal show={isPostsShowVisible} onClose={handleClose}>
            <PostsShow post = {currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
      </>
    );
  }