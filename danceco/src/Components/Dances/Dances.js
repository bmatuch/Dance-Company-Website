import React, { useEffect, useState } from "react";
import { getAllDances } from "../../Common/Services/GetDanceData";
import DancesList from "./DancesList";
// set all the dances from the database 
const Dances = () => {
  const [dances, setDances] = useState([]);

  useEffect(() => {
    getAllDances().then((dances) => {
      setDances(dances);
    });
  }, []);

  return (
    <div>
      <h1 class='heading'>Dances for Fall 2023 Showcase</h1>
      <br />
      <DancesList dances={dances} /> 
    </div>
  );
};

export default Dances;
