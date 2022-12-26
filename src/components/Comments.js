import React, { useState } from 'react'

function Comments({ video}) {

      const [comment, setComment]=useState(video.comments)
      const [showComments, setShowComments]= useState(true)

    function handleHideComments(){

        setShowComments(!showComments)
        if(showComments ===true){
            let newComment = []
          return  setComment(newComment)
        } else{
            let newComment = video.comments
          return  setComment(newComment)
        }
       
    }

    const [count, setCount]= useState(0)

    function handleClickUp(){
        setCount(count=>count+1)
    }
    const [downcount, setdowncount]= useState(10)

    function handleClickDown(){
        setdowncount(downcount=>downcount-1)
    }
    const renderComments = comment.map((el)=>{
        return(
            <div key={el.id}>
                <h4>{el.user}</h4>
                <p>{el.comment}</p>
                <button onClick={handleClickUp} >{count}👍</button>
                <button onClick={handleClickDown} >{downcount}👎</button>
            </div>
        )
    })


    function searchComments(event){
        let newComment = comment.filter((el)=>el.user.includes(event.target.value))
    //    console.log(event.target.value)
        
      setComment(newComment)
    }
  return (
    <div>
        <button onClick={handleHideComments} >{showComments? "Hide Comments" : "Show Comments"}</button>
        <input onChange={searchComments} type="text" placeholder='search comment by username'></input>
        <h4>{video.comments.length} Comments</h4>
        {renderComments}

    </div>
  )
}

export default Comments