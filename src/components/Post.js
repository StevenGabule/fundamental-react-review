import React from 'react'

export const Post = ({ image, content, user }) => {
  return (
    <>
      {image && <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(image)} alt='post cover' />}
      <p>{content}</p>
      <p>{user}</p>
    </>
  )
}
