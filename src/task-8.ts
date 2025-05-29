import axios from "axios";
import type { AxiosResponse } from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response: AxiosResponse<Post[]> = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  if (posts && posts.length > 0) {
    console.log(posts[0].title);
  } else {
    console.log("No posts found.");
  }
});
