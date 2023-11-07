import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";

// protected to make sure a profile isn't displayed before the user logs in
const Protected = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!checkUser()) {
      navigate("/login");
    }
  }, [navigate]);

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
    }
    
    return null;
  
};

export default Protected;