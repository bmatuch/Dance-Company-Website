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
            {officer.get("firstName")} {officer.get("lastName")}
            <br />
            Role: {officer.get("role")}
            <Collapsible trigger={<button className="button">Learn what dance {officer.get("firstName")} is choreographing!</button>}>
              <p>{officer.get("danceId").get("danceName")}</p>
            </Collapsible>
          </li>
        </p>
      ))}
    </ul>
  );
};

export default OfficerList;
