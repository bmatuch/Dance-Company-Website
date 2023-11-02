import { Link } from "react-router-dom";
// footer for navigation
const Footer = () => (
    <nav class="navbar navbar-light bg-light">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/officers">Officers</a>
        </li>
      <li class="nav-item">
          <a class="nav-link" href="/profile">View Audition Profile</a>
        </li>
      </ul>
    </nav>
);

export default Footer;