import React, { useEffect, useState } from "react";
import { getAllOfficers } from "../../Common/Services/GetOfficerData";
import OfficersCollapse from "./OfficersCollapse.js";

const Officers = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    getAllOfficers().then((officers) => {
      setOfficers(officers);
    });
  }, []);

  return (
    <div>
      <h1>Meet your DanceCo Officers</h1>
      <hr />
      <ul className="list-unstyled">
        {officers.map((officer) => {
          return (
            <p>
              {" "}
              <li key="officer.id">
                {" "}
                {officer.get("firstName")} {officer.get("lastName")}{" "}
                {OfficersCollapse}
              </li>
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default Officers;
