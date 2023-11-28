import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Col from 'react-bootstrap/Col';
const DanceList = ({ dances }) => {
  
  return (
    <Container>
      {dances.map((dance) => (
        <Col key={dance.id}>
          <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2 className="danceName"><b>{dance.get("danceName")}</b></h2>
            </Accordion.Header>
            <AccordionBody>
              <p>
                <h3><b>Choreographer:</b> {dance.get("choreo").get("isOfficer") ? (
                <a href="/officers">
                {dance.get("choreo").get("choreoName")}
                </a>
                ) : (
                  dance.get("choreo").get("choreoName")
                )}<br />
                </h3>
                <h3>
                  <b>Rehearsal Time:</b> {dance.get("rehearsal")}<br />
                </h3>
              </p>
            </AccordionBody>
            </Accordion.Item>
          </Accordion>
        </Col>
      ))}
    </Container>




  );
};

export default DanceList;
