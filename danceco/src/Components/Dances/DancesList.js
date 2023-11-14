import React from "react";

const DanceList = ({ dances }) => {
  return (
    <ul className="list-unstyled">
      {dances.map((dance) => (
        <li key={dance.id}>
          <h2 className="danceName"><b>{dance.get("danceName")}</b></h2>
        </li>
      ))}
    </ul>
  );
};

export default DanceList;
