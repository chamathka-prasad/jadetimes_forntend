import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { post } = useParams();
  return (
    <div>{post}</div>
  )
}

export default Post