import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ViewProfileButton = (user) => {
    const navigate = useNavigate();
    const ProfileHandler = () => { 
        const user_id = user['user']
        navigate("/login/profile/view/" + user_id);
    }

    return (
        <Button onClick={ProfileHandler}>  View Profile  </Button>
    )
}

export default ViewProfileButton;