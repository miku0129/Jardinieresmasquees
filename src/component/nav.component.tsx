import { useState } from "react";
import { Link } from "react-router-dom";

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
    <nav
      className={`fixed top-0 left-0 z-0 mt-7 box-border flex h-1/12 w-full justify-between px-7.5 py-5 ${isNavshrunk ? "opacity-0" : "opacity-100"} transform items-center duration-500 ease-in-out`}
    >
      <Link to="/" className={`${isNavshrunk ? "pointer-events-none" : ""}`}>
        <div
          className={`h-20 w-20 rounded-full bg-[url("https://i.ibb.co/51sbQ5G/Screenshot-2023-08-20-143312.jpg")] ${isNavshrunk ? "shrink" : ""} bg-cover bg-center`}
        />
      </Link>
      <ul className="flex justify-end-safe gap-7.5 text-lg text-black md:text-2xl">
        <li>
          <Link
            to="/"
            className={`hover:text-green-800 ${isNavshrunk ? "pointer-events-none" : ""}`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={`hover:text-green-800 ${isNavshrunk ? "pointer-events-none" : ""}`}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}
