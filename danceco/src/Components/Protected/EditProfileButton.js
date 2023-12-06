import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// button to allow admin to pick a profile to edit
const ViewProfileButton = ({user}) => {
    const navigate = useNavigate();
    const ProfileHandler = () => { 
        navigate("/login/profile/edit/" + user);
    }

    return (
        <Button id="editProfile" onClick={ProfileHandler}>  Edit Profile </Button>
    )
}

export default ViewProfileButton;