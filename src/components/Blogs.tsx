import Post from "../interface/PostInterface";
import PostItem from "./PostItem";

interface BlogProps {
  userposts: Post[];
  onEditClick: any;
}

const Blogs = ({ userposts }: BlogProps) => {
  const handleEditPost = (postId: number) => {
    console.log(`${postId} from blogs `);
  };
  return (
    <div>
      {userposts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEditClick={() => handleEditPost(post.id)}
        />
      ))}
    </div>
  );
};

export default Blogs;
