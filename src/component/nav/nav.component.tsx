import { useState } from "react";
import { Link } from "react-router-dom";

// import { AnchorLink } from "react-anchor-navigation";

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
        {/* <AnchorLink href="#accueil">
          <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
        </AnchorLink> */}
        <Link to="/">
          <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
        </Link>
      </div>
      <ul className="menu">
        {/* <li>
          <AnchorLink href="#accueil">Accueil</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#propos">A&nbsp;propos</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#infos">Infos</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li> */}
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
