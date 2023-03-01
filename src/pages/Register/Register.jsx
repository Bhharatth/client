import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
        <span style={{fontSize:'30px'}}>CREATE AN ACCOUNT</span>
      <form>
        <input placeholder="name" />
        <input placeholder="last name" />
        <input placeholder="username" />
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="conform password" />
        <button>CREATE</button>
      </form>
    </div>
  );
};

export default Register;
