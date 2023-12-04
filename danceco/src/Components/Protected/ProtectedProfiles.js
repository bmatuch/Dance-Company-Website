import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewProfileButton from "./ViewProfileButton"

const ProfileList = ({ users }) => {

  return (
    <Container id="profiles">
      <Row md={3} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <Card>
              <Card.Body>
                <h3>{user.get("first_name")} {user.get("last_name")}&nbsp;&nbsp; </h3>
                <ViewProfileButton user={user.id}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileList;
