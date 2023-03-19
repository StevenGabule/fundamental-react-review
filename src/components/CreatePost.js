import React, { useRef, useState } from 'react'

export const CreatePost = ({ user, setPosts }) => {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const imageRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setPosts(prev => [{ content, image, user }, ...prev]);
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
