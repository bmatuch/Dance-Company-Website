import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";
import Button from 'react-bootstrap/Button';
// protected to make sure a profile isn't displayed before the user logs in
const Protected = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/login");
  };
  if (checkUser()) {
    // in the future, this will also display information about the user's profile 
    // like their audition status
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