import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService.js";
import Button from 'react-bootstrap/Button';

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
      <Link to="/profile/login">
        <Button type="submit">Login</Button>
      </Link>
      <Link to="/profile/create">
        <button>Create</button>
      </Link>

    </div>
  );
};

export default AuthModule; 