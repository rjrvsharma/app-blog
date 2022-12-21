import React from 'react'
import './settings.css'
import Sidebar from '../../Components/sidebar/Sidebar'

function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingspp">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5TfbNZOUp-i0CZuuXJ9xbhkC0JLlT_zTCw&usqp=CAU" alt="" />
              <label htmlFor='fileinput'>
              <i className="settingsppIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileinput" style={{display:"none"}} />
            </div>
            <label>User Name</label>
            <input type="text" placeholder="Safak" />
            <label>Email</label>
            <input type="Email" placeholder="ravishankarvishk@gmailcom" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
