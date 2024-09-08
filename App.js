import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
      } catch (error) {
        console.error(error);
        }
        };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('https://localhost:5000/posts', {title,context});
      setPosts([...posts, response.data]);
      setTitle('');
      setContext('');
      }catch(error){
        console.error(error);
    }
  };

  return (
    <div>
      <h1> Blog Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div> 
        <div>
          <label>Context:</label>
          <textarea value={context} onChange={(e) => setContext(e.target.value)}></textarea>
        </div>
        <button type="submit">ADD Post</button>
        </form>
        <ul>
          {posts.map(post => (
            <li key = {post.id}>
              <h2>{post.title}</h2>
              <p>{post.context}</p>
            </li>
          ))}
        </ul>

    </div>
  );
}

export default App;
