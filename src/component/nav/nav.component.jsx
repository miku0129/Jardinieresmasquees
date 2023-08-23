import { useState } from "react";
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
        <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
      </div>
      <ul className="menu">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">A&nbsp;propos</a>
        </li>
        <li>
          <a href="#">Infos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
