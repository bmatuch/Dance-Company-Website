import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// button to view a specific profile
const ViewProfileButton = ({profileId}) => {
    const navigate = useNavigate();
    const ProfileHandler = () => { 
        console.log(profileId);
        navigate("/login/profile/view/" + profileId);
    }

    return (
        <Button onClick={ProfileHandler}>  View Profile  </Button>
    )
}

export default ViewProfileButton;