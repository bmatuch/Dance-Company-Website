import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OfficerList = ({ officers }) => {
  return (
    <Container>
      <Row md={3} className="g-4">
        {officers.map((officer) => (
          <Col key={officer.id}>
            <Card>
              <Card.Img variant="top" src={officer.get('photo').url()} />
              <Card.Body>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h3>{officer.get("firstName")} {officer.get("lastName")}&nbsp;&nbsp;</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <b>Hometown</b>: {officer.get("hometown")}<br />
                        <b>Dance Experience</b>: {officer.get("experience")}<br />
                        <b>Year:</b> {officer.get("year")}<br />
                        <b>Dorm:</b> {officer.get("dorm")}<br />
                        <b>Major:</b> {officer.get("major")}<br />
                        <b>Favorite Part of DanceCo:</b> {officer.get("favorite")}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfficerList;
