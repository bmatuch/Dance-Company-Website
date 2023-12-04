import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getAllUsers } from "../../Common/Services/GetUserData";


const ViewProfile = () => {

    const { userId } = useParams();
    const [users, setUsers] = useState([]);
    useEffect(() => {
      getAllUsers().then((users) => {
        setUsers(users);
      });
    }, []);

    console.log(users[0]);

    return (
    <h1> ___'s Profile</h1>
    )
    }


export default ViewProfile;