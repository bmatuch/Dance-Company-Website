import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { GetUser } from "../../Common/Services/GetUser";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Parse from "parse";

const EditProfile = () => {

    const navigate = useNavigate();
    const { profileId } = useParams();
    const [userProfile, setUserProfile] = useState ({
      first_name: '',
      last_name: '',
      auditionDate: '',
      notes: '',
      teamPlacement: '',
      status: ''
    })
    

    useEffect(() => {
      GetUser(profileId).then((users) => {
          if (users.length > 0) {
              const user = users[0];
              setUserProfile({
                  first_name: user.get("first_name"),
                  last_name: user.get("last_name"),
                  auditionDate: user.get("auditionDate"),
                  notes: user.get("notes"),
                  teamPlacement: user.get("teamPlacement"),
                  status: user.get("status")
              });
          }
      }).catch((error) => {
          console.error("Error fetching user:", error);
      });
  }, [profileId]);

    const goBackHandler = () => {
      navigate("/login/profile");
    }

    const handleUpdate = (updateNum) => {
    updateHandler(updateNum);
    };

    const updateHandler = (updateNum) => {

      const Users = Parse.Object.extend("Profile");
      const query = new Parse.Query(Users);

      query.get(profileId).then((userToUpdate) => {

          if (updateNum == 1) { userToUpdate.set("auditionDate", userProfile.auditionDate);}
          if (updateNum == 2) { userToUpdate.set("notes", userProfile.notes);}
          if (updateNum == 3) { userToUpdate.set("teamPlacement", userProfile.teamPlacement);}
          if (updateNum == 4) { userToUpdate.set("status", userProfile.status);}

          userToUpdate.save().then((updatedUser) => {
              // Handle successful update
              console.log("User updated:", updatedUser);
              window.location.reload();
          }).catch((error) => {
              // Handle error
              console.error("Error updating user:", error);
          });
      }).catch((error) => {
          // Handle error
          console.error("Error fetching user:", error);
      });

    }

    const handleInputChange = (fieldName, value) => {

      setUserProfile({
          ...userProfile,
          [fieldName]: value
      });
    }
    

    return (
      <Container id="profiles">
        {userProfile.first_name && userProfile.last_name && (
        <>
        <h1 className="heading">Edit {userProfile.first_name} {userProfile.last_name}'s Profile</h1>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label> <b>Audition Date</b>  </Form.Label>
          <Form.Control 
            name="audition"
            onChange={(e) => handleInputChange("auditionDate", e.target.value)}
            placeholder={userProfile.auditionDate}/>
          <Button id="edit" onClick={() => handleUpdate(1)}> Update Audition Date</Button><br /><br />

          <Form.Label> <b>Notes</b>  </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="notes"
            onChange={(e) => handleInputChange("notes", e.target.value)}
            placeholder={userProfile.notes}/>
          <Button id="edit" onClick={() => handleUpdate(2)}> Update Notes</Button><br /><br />

          <Form.Label> <b>Team Placement</b>  </Form.Label>
          <Form.Control
            name="placement"
            onChange={(e) => handleInputChange("teamPlacement", e.target.value)}
            placeholder={userProfile.teamPlacement}/>
          <Button id="edit" onClick={() => handleUpdate(3)}> Update Team Placement</Button><br /><br />

          <Form.Label> <b>Audition Status</b>  </Form.Label>
          <Form.Control
            name="status"
            onChange={(e) => handleInputChange("status", e.target.value)}
            placeholder={userProfile.status}/>
          <Button id="edit" onClick={() => handleUpdate(4)}> Update Audition Status</Button><br /><br />

          </Form.Group>
          <Button id="back" onClick={goBackHandler}> Back to Dashboard</Button><br />
        </Form>
        </> 
        )}
    </Container>
    )
    }


export default EditProfile;