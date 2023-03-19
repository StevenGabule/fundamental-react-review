import React, { useContext, useRef, useState } from 'react'
import { PostContext } from '../App'

export const CreatePost = ({ user }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const imageRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: 'ADD_POST', payload: { post } })
    setContent('')
    imageRef.current.value = '';
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={content} placeholder='Add Post Content' onChange={event => setContent(event.target.value)} />
        <input type='file' onChange={event => setImage(event.target.files[0])} ref={imageRef} />
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  )
}
