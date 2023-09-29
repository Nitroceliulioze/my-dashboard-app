import React from "react";

interface PostItemProps {
  post: Post;
  onEditClick: () => void;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ post, onEditClick }: PostItemProps) => {
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
      <button className='btn' onClick={onEditClick}>Edit</button>
    </div>
  );
};

export default PostItem;
