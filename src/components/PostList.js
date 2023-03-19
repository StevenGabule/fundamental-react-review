import React from 'react'
import { Post } from './Post'

export const PostList = ({ posts }) => {
  return posts.map((post, indx) => <Post key={indx} {...post} />)
}
