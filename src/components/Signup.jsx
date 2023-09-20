import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
   
        <div className="full">
      <div className="container">
        <div className="box1">
          <h1>Sign Up</h1>
          <h4> Please enter your details.</h4>
          <input type="email" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Set a password" />
          <input type="password" placeholder="Confirm password" />
          <button className="btn1">Sign up</button>
          <button className="btn2">
          <FcGoogle fontSize={20}/>
            Sign up with Google
          </button>
         
        </div>
        <div className="box2">
          <img src="https://images.unsplash.com/photo-1616524770664-25c910d81a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Signup