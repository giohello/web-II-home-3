import { useEffect, useState } from "react";
import PostItem from "./PostItem";

function PostList({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const filteredData = data.filter((posts) => posts.userId === userId);
      setPosts(filteredData);
    }
    getUsers();
  }, [userId]);
  return posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });
}

export default PostList;
