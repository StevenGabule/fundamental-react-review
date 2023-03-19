import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { PostList } from './components/PostList';
import postReducer from './reducer';

export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState)
  const [user, setUser] = useState('reed');

  useEffect(() => {
    document.title = user ? `${user} feeds` : 'Please login';
  }, [user])

  if (!user) {
    return <Login setUser={setUser} />
  }



  return (
    <PostContext.Provider value={{state, dispatch}}>
      <UserContext.Provider value={user}>
        <Header setUser={setUser} user={user} />
        <CreatePost user={user} />
        {JSON.stringify(state.posts)}
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
