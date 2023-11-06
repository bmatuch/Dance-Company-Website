import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";
import Button from 'react-bootstrap/Button';

const Protected = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/login");
  };
  if (checkUser()) {
    return (
      <div>
        <h1 class='heading'>
          Profile
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <p>You're not logged in.</p>
        <Button onClick={goBackHandler}>Login</Button>
      </div>
    );
  }
};

export default Protected;