import React, { useEffect, useState } from "react";
import { getAllDances } from "../../Common/Services/GetDanceData";
import DancesList from "./DancesList";
import WorkSong from '../../static/images/Work-Song.jpg'

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
      <h1 class='heading-center'>Fall 2023 Showcase</h1>
      <br />
      <img src={WorkSong} class='group'></img>
      <br />
      <br />
      <DancesList dances={dances} /> 
    </div>
  );
};

export default Dances;
