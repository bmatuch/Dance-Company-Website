import React from "react";

const DanceList = ({ dances }) => {
  
  return (
    <ul className="list-unstyled">
      {dances.map((dance) => (
        <li key={dance.id}>
          <h2 className="danceName"><b>{dance.get("danceName")}</b></h2>
          <h3 className="choreo">
            Choreographer: {dance.get("choreo").get("isOfficer") ? (
              <a href="/officers">
              {dance.get("choreo").get("choreoName")}
              </a>
            ) : (
              dance.get("choreo").get("choreoName")
            )}</h3>
        </li>
      ))}
    </ul>
  );
};

export default DanceList;
