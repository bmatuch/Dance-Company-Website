import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Profile/AuthService"; 
import Parse from "parse";

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
            <button onClick={logOutHandler}>Logout</button>
        </div>
    );
};

export default LogOut;