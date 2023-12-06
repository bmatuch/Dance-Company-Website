import React, { useEffect, useState } from "react";
import { getAllDances } from "../../Common/Services/GetDanceData";
import DancesList from "./DancesList";
import WorkSong from '../../static/images/Work-Song.jpg';
import London from '../../static/images/London.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Bows from '../../static/images/Bows.jpg'
import Group from '../../static/images/Group-Photo.jpg'
import BW from '../../static/images/BW.jpg'
import Duet from '../../static/images/Duet.jpg'
import Nikki from '../../static/images/Nikki.jpg'

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
      <h3 class='logo2'> November 16 & 17 in Washington Hall at 7:30pm</h3>
      <Carousel fade>
      <Carousel.Item>
        <img src={WorkSong} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={London} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Bows} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={BW} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Nikki} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Duet} class='group'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Group} class='group'></img>
      </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <DancesList dances={dances} /> 
    </div>
  );
};

export default Dances;
