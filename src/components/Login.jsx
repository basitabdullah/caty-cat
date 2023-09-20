import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="full">
      <div className="container">
        <div className="box1">
          <h1>Welcome back</h1>
          <h4> Please enter your details.</h4>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <a href="sd">Forgot password</a>
          <button className="btn1">Sign in</button>
          <button className="btn2">
          <FcGoogle fontSize={20}/>
            Sign in with Google
          </button>
          <h3>
            Dont have an account?
            <Link to={"/signup"}>Sign Up</Link>
          </h3>
        </div>
        <div className="box2">
          <img src="https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
