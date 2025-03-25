import { useMemo, useReducer, useState } from 'react';
import { posts as data, Post } from './post-data';
import './Post.css';

type PostAction = { type: 'DELETE_POST'; id: number } | { type: 'RESTORE_POSTS' };

const postReducer = (posts: Post[], action: PostAction) => {
  switch (action.type) {
    case 'DELETE_POST':
      return posts.filter((post) => post.id !== action.id);
      break;
    case 'RESTORE_POSTS':
      return data;
      break;
    default:
      return posts;
  }
};

const PostComponent = () => {
  const [posts, dispatch] = useReducer(postReducer, data);
  const [searchText, setSearchText] = useState<string>("");

  const filteredPosts = useMemo(() => {
    const query = searchText.trim();
    if(query) {
      return posts.filter(post => post.body.toLowerCase().includes(query.toLocaleLowerCase()) || post.title.toLowerCase().includes(query.toLocaleLowerCase()));
    } else {
      return posts;
    }
  }, [searchText, posts]);

  return (
    <div className="post-container">
      <h2>Posts container</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: "space-between",
          marginBottom: "8px"
        }}
      >
        <label>
          Search posts: <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        </label>
        <button onClick={() => dispatch({ type: 'RESTORE_POSTS' })}>restore</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => dispatch({ type: 'DELETE_POST', id: post.id })}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostComponent;
