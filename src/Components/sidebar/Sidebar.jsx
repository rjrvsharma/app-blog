import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className="sidebarTitls">About Me</span><br/>
        <img className='img' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi error fuga, optio eos repudiandae beatae maiores
             unde atque earulaceat!</p>
      </div>
      <div className='sidebarItem'>
      <span className="sidebarTitls">CATAGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sports</li> 
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>  
      </ul>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitls">Follow Us</span>
     <div className="sideBarSocial">
        <i className="sidebarItem fa-brands fa-square-facebook"></i>
        <i className="sidebarItem fa-brands fa-square-twitter"></i>
        <i className="sidebarItem fa-brands fa-square-pinterest"></i>
        <i className="sidebarItem fa-brands fa-square-instagram"></i>
     </div>
     </div>
    </div>
  )
}

export default Sidebar
