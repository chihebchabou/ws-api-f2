import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, isLoading, error}) => {
  
  if (isLoading) {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        
    )
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">
    {error}
  </div>
  }

  return posts && (
    <div className='py-5'>
        <div className="row">
            {posts.map(post => <PostItem post={post} key={post.id} />)}
        </div>
    </div>
  )
}

export default PostList