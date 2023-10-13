import React, { useEffect, useState } from "react";
import { getAllOfficers } from "../../Common/Services/GetOfficerData";
import OfficersList from "./OfficersList";
// set all the officers from the database 
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
      <OfficersList officers={officers} /> 
    </div>
  );
};

export default Officers;
