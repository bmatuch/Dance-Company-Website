import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";
import { checkAdmin } from "../Profile/AuthService"; 
import { getAllUsers } from "../../Common/Services/GetUserData";
import ProtectedProfiles  from "./ProtectedProfiles";

// protected to make sure a profile isn't displayed before the user logs in
const Protected = ({ element: Component, ...rest }) => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  console.log("hello");
  console.log(users);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkUser()) {
      navigate("/login");
    }
  }, [navigate]);

  if (checkUser()) {
    // in the future, this will also display information about the user's profile 
    // like their audition status
    if (checkAdmin()) {
      return (
        <div>
          <h1 className="heading">Admin Dashboard</h1>
          <br />
          <ProtectedProfiles users={users} /> 
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="heading">Profile</h1>
        </div>
      );
    }
  } 
    
  return null;
  
};

export default Protected;