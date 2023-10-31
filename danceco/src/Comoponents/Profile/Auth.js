import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService.js";

const AuthModule = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <Link to="/profile/create">
        <button>Create</button>
      </Link>
      <br />
      <br />
      <Link to="/profile/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule; 