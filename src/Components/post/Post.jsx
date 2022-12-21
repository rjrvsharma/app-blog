import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg?w=2000" alt="" />
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor!</span>
        <hr/>
        <span className='postDate'>
            1 Hour Ago
        </span>
    </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium esse repellat saepe minus quaerat, vitae porro neque odio! Voluptatum eligendi quidem dolorem iste autem excepturi odio ducimus minima commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium esse repellat saepe minus quaerat, vitae porro neque odio! Voluptatum eligendi quidem dolorem iste autem excepturi odio ducimus minima commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium esse repellat saepe minus quaerat, vitae porro neque odio! Voluptatum eligendi quidem dolorem iste autem excepturi odio ducimus minima commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium esse repellat saepe minus quaerat, vitae porro neque odio! Voluptatum eligendi quidem dolorem iste autem excepturi odio ducimus minima commodi.

        </p>
    </div>
  )
}

export default Post
