import React, { useContext } from 'react'
import { PostContext, UserContext } from '../App'

export const Post = ({ id, image, content, user }) => {
  const { dispatch } = useContext(PostContext);
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
  return (
    <div>
      {image && <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(image)} alt='post cover' />}
      <p>{content}</p>
      <p style={{ color: isCurrentUser && 'green' }}>{user}</p>
      {isCurrentUser && <button onClick={() => dispatch({ type: 'DELETE_POST', payload: { id } })}>Delete</button>}
    </div>
  )
}
