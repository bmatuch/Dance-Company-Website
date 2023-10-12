import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { getAllOfficers } from "../../Common/Services/GetOfficerData";

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
                <Collapsible trigger={<button className="button">Learn more about {officer.get("firstName")}!</button>}>
                <p>{officer.get("favorite")}</p>
              </Collapsible>
              </li>
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default Officers;
