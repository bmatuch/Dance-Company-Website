import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService"; 
import Parse from "parse";
import Button from "react-bootstrap/Button";
// log out button
const LogOut = () => {
    const navigate = useNavigate();
    const logOutHandler = () => {
        if (checkUser()) {
            Parse.User.logOut();
            navigate("/");
        }
    };

    return (
        <div>
            <Button id="logout" onClick={logOutHandler}>Logout</Button>
        </div>
    );
};

export default LogOut;