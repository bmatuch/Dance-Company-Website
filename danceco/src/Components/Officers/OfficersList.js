import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OfficerList = ({ officers }) => {

  const [flip, setFlip] = useState(false);

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
                      {/* <p>
                        <b>Hometown</b>: {officer.get("hometown")}<br />
                        <b>Dance Experience</b>: {officer.get("experience")}<br />
                        <b>Year:</b> {officer.get("year")}<br />
                        <b>Dorm:</b> {officer.get("dorm")}<br />
                        <b>Major:</b> {officer.get("major")}<br />
                        <b>Favorite Part of DanceCo:</b> {officer.get("favorite")}
                      </p> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfficerList;
