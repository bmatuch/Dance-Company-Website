import { Link } from "react-router-dom";
// footer for navigation
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/officers">Officers</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;