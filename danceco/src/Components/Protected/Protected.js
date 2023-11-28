import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService";
import { checkAdmin } from "../Profile/AuthService"; 
import { getAllUsers } from "../../Common/Services/GetUserData";
import ProtectedProfiles  from "./ProtectedProfiles";
import LogOut from "./LogOut";


// protected to make sure a profile isn't displayed before the user logs in
const Protected = ({ element: Component, ...rest }) => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (!checkUser()) {
      navigate("/login");
    }
  }, [navigate]);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await checkAdmin();
      setIsAdmin(adminStatus);
    }
    fetchData();
  });


  if (checkUser()) {
    
    if (isAdmin == true) {
      return (
        <div>
          <h1 className="heading">Admin Dashboard</h1>
          <br />
          <ProtectedProfiles users={users} /> 
          <LogOut />
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="heading">Profile</h1>
          <br /> 
          <LogOut />
        </div>
      );
    }
  } 
    
  return null;
  
};

export default Protected;