import groupPhoto from '../../static/images/Group-Photo.jpg'

export default function Home() {
    return (
      <section>
        <h1 class='logo'>Notre Dame Dance Company</h1>
        <br />
        <img src={groupPhoto} class='group'></img>
      </section>
    );
  }