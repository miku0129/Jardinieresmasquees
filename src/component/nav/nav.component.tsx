import { useState } from "react";
import { Link } from "react-router-dom";

import { Navigation, Logo } from "./nav.styles";

const Nav = () => {
  const [isNavshrunk, setIsNavShrunk] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && !isNavshrunk) {
      setIsNavShrunk(true);
    } else if (window.scrollY <= 100 && isNavshrunk) {
      setIsNavShrunk(false);
    }
  });

  return (
    <Navigation className={`${isNavshrunk ? "shrink" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
