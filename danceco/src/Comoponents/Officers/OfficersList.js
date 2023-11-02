import React from "react";
import Collapsible from "react-collapsible";
// display officer list, child of Officers.js 
// child will make things cleaner as we add more components
// also get dance objects associated with each officer
const OfficerList = ({ officers }) => {
  return (
    <ul className="list-unstyled">
      {officers.map((officer) => (
        <p key={officer.id}>
          <li>
            <h2> {officer.get("role")} </h2>
            <Collapsible trigger = {<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="panelsStayOpen-collapse"> <h3>{officer.get("firstName")} {officer.get("lastName")}</h3></button>}>
                  <p><b>Hometown</b>: {officer.get("hometown")}</p>
                  <p><b>Dance Experience</b>: {officer.get("experience")}</p>
                  <p><b>Year:</b> {officer.get("year")}</p>
                  <p><b>Dorm:</b> {officer.get("dorm")}</p>
                  <p><b>Major:</b> {officer.get("major")}</p>
                  <p><b>Favorite Part of DanceCo:</b> {officer.get("favorite")}</p>
            </Collapsible>
          </li>
        </p>
      ))}
    </ul>
  );
};

export default OfficerList;
