import React, { useState } from 'react'
import video from '../data/video'
import Views from './Views'

function Body({video}) {

    const [upvote, setUpvote]= useState(video.upvotes)
   
    function handleUpvotes(){
        setUpvote(upvote => upvote+1)
    }

    const [downvote, setDownvote]= useState(video.downvotes)
   
    function handleDownvotes(){
        setDownvote(downvote => downvote-1)
    }
  return (
    <div>
        <h4>{video.title}</h4>
        <Views video={video} handleUpvotes={handleUpvotes} upvote={upvote} 
        handleDownvotes={handleDownvotes} downvote={downvote}/>
    </div>
  )
}

export default Body