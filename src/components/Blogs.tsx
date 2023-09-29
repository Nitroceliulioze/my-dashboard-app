import { useState, useEffect } from "react";
import User from "../interface/UserInterface";
import PostItem from "./PostItem";

interface BlogProps {
  user: User | null;
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blogs = ({ user }: BlogProps) => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
 
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



  const handleEditPost = (postId: number) => {
    // Navigate to edit post page e.g., `app/posts/${postId}/edit`
  };



  return (
    <div>
       {userPosts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEditClick={() => handleEditPost(post.id)}
        />
      ))}
    </div>
  );
}

export default Blogs;
