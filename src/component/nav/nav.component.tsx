import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo, Navigation } from "./nav.styles";

export default function Nav() {
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
      <Link to="/">
        <Logo className={`${isNavshrunk ? "shrink" : ""}`}></Logo>
      </Link>
      <ul className="flex justify-end-safe gap-7.5 text-lg text-black md:text-2xl">
        <li>
          <Link to="/" className="hover:text-green-800">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-green-800">
            Gallery
          </Link>
        </li>
      </ul>
    </Navigation>
  );
}
