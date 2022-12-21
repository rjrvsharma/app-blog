import React from 'react'
import './write.css'

function Write() {
  return (
    <div className='write'>
        <img className='writeImg'  src="https://variety.com/wp-content/uploads/2022/03/My-Hero-Academia.jpg?w=1000" alt="" />
      <form className='writeform'>
        <div className="writeFormGroup">
            <label htmlFor='fileinput'>
            <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='tell your story...' type="text" className='writeInput writetext'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
