import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { GetUser } from "../../Common/Services/GetUser";
import Container from 'react-bootstrap/Container';
import EditProfileButton from "./EditProfileButton";

// displays a specific profile after using the view profile button
const ViewProfile = () => {

    const { profileId } = useParams();
    const [users, setUser] = useState([]);
    useEffect(() => {
      GetUser(profileId).then((users) => {
        setUser(users);
      });
    }, []);

    return (
      <Container id="profiles">
        {users.map((user) => (
        <>
        <h1 className="heading">{user.get("first_name")} {user.get("last_name")}&nbsp;&nbsp; </h1>
        <p className="profile"><b>Audition Date: </b> {user.get("auditionDate")}<br />
        {/* <b> Year:</b> {user.get("year")}<br /> */}
        {/* <b> Experience:</b> {user.get("danceExperience")}<br /> */}
        <b> Notes:</b> {user.get("notes")}<br />
        <b> Team Placement:</b> {user.get("teamPlacement")}<br />
        <b> Audition Status:</b> {user.get("status")} </p>
        <EditProfileButton user={profileId}/></>
        ))
        }
    </Container>
    )
    }


export default ViewProfile;