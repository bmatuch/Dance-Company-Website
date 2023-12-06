import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkPresident, checkUser } from "../Profile/AuthService";
import { checkAdmin } from "../Profile/AuthService"; 
import { getUserId } from "../Profile/AuthService"; 
import { GetUser } from "../../Common/Services/GetSpecificUserData";
import { getAllUsers } from "../../Common/Services/GetUserData";
import ProtectedProfiles  from "./ProtectedProfiles";
import LogOut from "./LogOut";


// Protected to make sure a profile isn't displayed before the user logs in
const Protected = ({ element: Component, ...rest }) => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPrez, setIsPrez] = useState(false);
  const [user, setUserId] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((allUsers) => {
      setAllUsers(allUsers);
    });
  }, []);

  useEffect(() => {
    if (!checkUser()) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        const adminStatus = await checkAdmin();
        setIsAdmin(adminStatus);
  
        const PrezStatus = await checkPresident();
        setIsPrez(PrezStatus);
  
        const userId = getUserId();
        setUserId(userId);
  
        const userData = await GetUser(userId);
        setUsers(userData);
      };
  
      fetchData();
    }
  }, [navigate]);

  
  if (checkUser()) {
    // if admin is president, they will login to a president dashboard
    if (isAdmin == true && isPrez == true) {
      return (
        <div>
          <h1 className="heading">President Admin Dashboard</h1>
          <br />
          <ProtectedProfiles users={allUsers} /> 
          {/* <EditOfficersButton/> */}
          <LogOut />
        </div>
      );
    }
    // else if normal admin, allows admin to edit profiles
    else if (isAdmin == true) {
      return (
        <div>
          <h1 className="heading">Admin Dashboard</h1>
          <br />
          <ProtectedProfiles users={allUsers} /> 
          <LogOut />
        </div>
      );
      }
    // else normal user and their profile is displayed
    else {
      return (
        <div>
          {users.length > 0 && users.map((user) => (
            <>
            <h1 className="heading"> Hey, {user.get("first_name")} {user.get("last_name")}!</h1>
            <br/>
            <h4 className="profile"> <b>here are your current profile details: </b></h4>
            <p className="profile"> <b> email: </b> {user.get("email")}<br /> 
            <b> class year: </b> {user.get("year")}<br /> 
            <b> dance experience: </b> {user.get("danceExperience")}<br /> <br /> 
            <b> audition status: </b> {user.get("profile").get("status")}<br />
            <b> team placement: </b> {user.get("profile").get("teamPlacement")}
            </p>
            </>
            ))}
          <LogOut />
        </div>
      );
    }
  } 
    
  return null;
  
};

export default Protected;