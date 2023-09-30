import { useState } from "react";
import Post from "../interface/PostInterface";

interface PostItemProps {
  post: Post;
  onEdit: (postId: number, newTitle: string, newBody: string) => void;
  onDelete: (postId: number) => void;
}

const PostItem = ({ post, onEdit, onDelete }: PostItemProps) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [editOpen, setEditOpen] = useState(false);

  const handleEditPost = () => {
    setEditOpen(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${post.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: post.id,
            title,
            body,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Post updated successfully");
      onEdit(post.id, title, body); // Update state with new title and body
    } catch (error) {
      console.error("Error updating post:", error);
    }
    setEditOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${post.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Post deleted successfully");
      onDelete(post.id); // Remove the post from state
    } catch (error) {
      console.error("Error deleting post:", error);
    }
    setEditOpen(false);
  };
  return (
    <div className="blog" key={post.id}>
      <img
        className="blog-img"
        src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png"
        alt="blog-pic"
      />
      <div className="blog-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <button className="btn" onClick={handleEditPost}>
        Edit
      </button>
      {editOpen && (
        <>
        <div className="modal-overlay"></div>
        <div className="popup">
          <h1>Edit Post</h1>
          <div className="edit-form">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="edit-form">
            <label>Body:</label>
            <textarea
            className="textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Save</button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
        </>
      )}
    </div>
  );
};

export default PostItem;