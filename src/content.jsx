import {PostsNew} from "./postsnew"
import {PostsIndex} from "./postsindex"

export function Content() {
    // let name = "Scott"
    let posts = [
      {
        id: 1,
        title: "Scott",
        body: "Gutters created woooohoooo",
        image_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fsfnkq8lmu5d7%2F5O3T6I1KjJ2IcLSRxhHJVp%2Facbe8ef2858eb0c98de93b061a531f52%2F2023-08-01_World_dog_surfing_championship_-_hero_.jpg&tbnid=DcnI-EsmF3iYbM&vet=12ahUKEwiWqqqx4PGEAxWKyckDHasrD_4QMygUegUIARCfAQ..i&imgrefurl=https%3A%2F%2Fwww.thewildest.com%2Fdog-lifestyle%2Fworld-dog-surfing-championships&docid=nEHbk8acaCHobM&w=1000&h=750&q=dog%20surfing&client=safari&ved=2ahUKEwiWqqqx4PGEAxWKyckDHasrD_4QMygUegUIARCfAQ",
      },
      {
        id: 2,
        title: "Scott",
        body: "I need some gutters",
        image_url: "___",
      },
      {
        id: 3,
        title: "Scott",
        body: "Site made, no gutters though, me sad",
        image_url: "___",
      },
    ];
    return (
      <>
        <PostsNew />
        <PostsIndex posts={posts}/>
      </>
    );
  }