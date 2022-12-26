import React from 'react'

function Views({video, handleUpvotes, upvote, handleDownvotes, downvote}) {


  return (
    <div>
        <p>{video.views} views | Uploaded {video.createdAt}</p>
        <button onClick={handleUpvotes} >{upvote}👍</button>
        <button onClick={handleDownvotes} >{downvote}👎</button>
    </div>
  )
}

export default Views