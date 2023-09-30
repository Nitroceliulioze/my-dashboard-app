import Post from "../interface/PostInterface";
import PostItem from "./PostItem";

interface BlogProps {
  userposts: Post[];
  onEdit: (postId: number, newTitle: string, newBody: string) => void;
  onDelete: (postId: number) => void;
}

const Blogs = ({ userposts, onEdit, onDelete }: BlogProps) => {
  return (
    <div>
      {userposts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Blogs;