import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";

const Protected = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/profile");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <p>Not allowed!</p>
        <button onClick={goBackHandler}>Go back</button>
      </div>
    );
  }
};

export default Protected;