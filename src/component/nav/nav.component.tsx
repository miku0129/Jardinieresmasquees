import { useState } from "react";

import { AnchorLink } from "react-anchor-navigation";

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
        <AnchorLink href="#accueil">
          <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
        </AnchorLink>
      </div>
      <ul className="menu">
        <li>
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
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
