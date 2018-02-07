import React from "react";
import { Link } from "react-router-dom";
import "../assets/global.css";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;