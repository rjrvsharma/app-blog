import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className="registerform">
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter Your Username...' />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your Email...' />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter Your Password...' />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className='link' to="/login">
          Login
          </Link>
        </button>
    </div>
  )
}

export default Register
