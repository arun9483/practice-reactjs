import { Tab } from "./tabsManagerReducer";

export interface Post extends Tab {
  content: string;
}

const PostRenderer = (post: Post) => {
  if (!post) {
    return null;
  }

  return (
    <div>
      <h4>id: {post.id}</h4>
      <div>title: {post.title}</div>
      <p>content: {post.content}</p>
    </div>
  );
};

export default PostRenderer;
