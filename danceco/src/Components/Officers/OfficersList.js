import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OfficerList = ({ officers }) => {
// allow user to see pic of officer and their role
  return (
    <Container id='officer'>
      <Row md={3} className="g-4">
        {officers.map((officer) => (
          <Col key={officer.id}>
            <Card>
              <Card.Img variant="top" src={officer.get('photo').url()} />
              <Card.Body>
                    <h3 class="officer">{officer.get("firstName")} {officer.get("lastName")}&nbsp;&nbsp;</h3>
                    <h5 class="role"> {officer.get("role")} </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfficerList;
