import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"

export function Content() {
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