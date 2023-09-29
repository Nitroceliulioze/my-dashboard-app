import { useState, useEffect } from "react";
import User from "../interface/UserInterface";

interface BlogProps {
    user: User | null;
  }
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Blogs( {user}: BlogProps) {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  console.log(user?.id)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/users/${user?.id}/posts`
        );
        const allPosts = await response.json();
        console.log(allPosts);

        setUserPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [user?.id]);

  return (
    <div>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
