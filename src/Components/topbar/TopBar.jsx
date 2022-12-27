import React from 'react'
import { Link } from "react-router-dom"
import './topbar.css'

function TopBar() {
  const User = true;
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
              <li className='topListItem'>
                <Link to="/" className='link'>Home</Link>
              </li>  
              <li className='topListItem'>
              <Link to="/Singlepost" className='link'>About</Link>
                </li>  
              <li className='topListItem'>
              <Link to="/settings" className='link'>Contact</Link>
                </li>  
              <li className='topListItem'>
              <Link to="/Write" className='link'>Write</Link>
                </li>  
              <li className='topListItem'>
                {User && "Logout"}
                </li>  
            </ul>    
        </div>
        <div className='topRight'>
          {
            User ? (
             
              <img className='topImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB78NUo7qlfhAYYX2d00oXcqefIbE1QKIPk1ko51cFloCSiF8-wlrpHjjoAIHepffZAw&usqp=CAU" alt="" />

            ) : (
              <ul className='topList'>

                <li className='topListItem'>
                   <Link to="/Login" className='link'>LOGIN</Link>
                </li>
                <li className='topListItem'>
                <Link className='link' to="/R egister">REGISTER</Link>
               </li>
             
              </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar
