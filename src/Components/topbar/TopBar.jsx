import React from 'react'
import './topbar.css'

function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
              <li className='topListItem'>Home</li>  
              <li className='topListItem'>About</li>  
              <li className='topListItem'>Contact</li>  
              <li className='topListItem'>Write</li>  
              <li className='topListItem'>Logout</li>  
            </ul>    
        </div>
        <div className='topRight'>
            <img className='topImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB78NUo7qlfhAYYX2d00oXcqefIbE1QKIPk1ko51cFloCSiF8-wlrpHjjoAIHepffZAw&usqp=CAU" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar
