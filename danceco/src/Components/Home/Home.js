import groupPhoto from '../../static/images/Group-Photo.jpg'
import bows from '../../static/images/Bows.jpg'
import London from '../../static/images/London.jpg'
import Video from '../../static/images/Video.mov'

export default function Home() {
    return (
      <section class='background'>
        <h1 class='logo'>NOTRE DAME DANCE COMPANY</h1>
        <h3 class='logo2'> performing on campus since 2004 </h3>
        <br />
        <video src={Video} autoplay="true" controls="controls"></video>
        <img src={groupPhoto} class='group'></img>
        <img src={London} class='group'></img>
        <img src={bows} class='group'></img>
        <br />
        <br />
        <p class='desc'>Notre Dame Dance Company (Dance Co.) was founded in the Spring of 2004 by student Sarah Tarighi. Since then, Dance Co. has increased its membership to over 135 dancers from the Notre Dame, Saint Mary’s and Holy Cross communities. Each semester, students choreograph group dances in a wide variety of styles, including: lyrical, contemporary, jazz, jazz funk, tap, hip hop, and ballet/pointe. These groups meet weekly to rehearse for our end-of-semester showcase, where they perform alongside solos, duets, and trios from members of the company. </p>
      </section>
    );
  }