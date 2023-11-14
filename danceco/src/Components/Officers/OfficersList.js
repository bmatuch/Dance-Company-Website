import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// display officer list, child of Officers.js 
// child will make things cleaner as we add more components
// also get dance objects associated with each officer

const OfficerList = ({ officers }) => {
  return (
    <ul className="list-unstyled">
    {officers.map((officer) => (
      <p key={officer.id}>
        <li>
          <h2 class="role"> <b>{officer.get("role")}</b> </h2>
          <img src={officer.get('photo').url()}></img>
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> <h2>{officer.get("firstName")} {officer.get("lastName")}&nbsp;&nbsp;</h2></Accordion.Header>
            <Accordion.Body>
              <p><b>Hometown</b>: {officer.get("hometown")}<br />
              <b>Dance Experience</b>: {officer.get("experience")}<br />
              <b>Year:</b> {officer.get("year")}<br />
              <b>Dorm:</b> {officer.get("dorm")}<br />
              <b>Major:</b> {officer.get("major")}<br />
              <b>Favorite Part of DanceCo:</b> {officer.get("favorite")}</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </li>
      </p>
    ))}
    </ul>
  );
};

export default OfficerList;