import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Col from 'react-bootstrap/Col';
const DanceList = ({ dances }) => {
  
  return (
    <Container id="dances">
      {dances.map((dance) => (
        <Col key={dance.id}>
          <h2 className="danceName">{dance.get("danceName")}&nbsp;&nbsp;</h2>
              <p className="dance">
                <b>Style:</b> {dance.get("danceStyle")}<br />
                <b>Choreographer:</b> {dance.get("choreo").get("isOfficer") ? (
                <a href="/officers" className="officers-route">
                {dance.get("choreo").get("choreoName")}
                </a>
                ) : (
                  dance.get("choreo").get("choreoName")
                )}
                  <br />
                  <b>Rehearsal Time:</b> {dance.get("rehearsalDay")}s from {dance.get("rehearsalTime")} in {dance.get("rehearsalLocation")}
                  
              </p>
        </Col>
      ))}
    </Container>




  );
};

export default DanceList;
