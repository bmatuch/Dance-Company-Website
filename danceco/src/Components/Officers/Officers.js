import React, { useEffect, useState } from "react";
import { getAllOfficers } from "../../Common/Services/GetOfficerData";
import OfficersList from "./OfficersList";
import officerPhoto from '../../static/images/Officer-Photo.jpg';

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
      <h1 class='heading-center'>Meet your Officers</h1>
      <br />
      <img src={officerPhoto} class='group'></img>
      <br />
      <OfficersList officers={officers} /> 
    </div>
  );
};

export default Officers;
