import { useEffect, useState } from 'react';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { PostList } from './components/PostList';

function App() {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user} feeds` : 'Please login';
  }, [user])

  if (!user) {
    return <Login setUser={setUser} />
  }

  return (
    <div>
      <Header setUser={setUser} user={user} />
      <CreatePost user={user} setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
