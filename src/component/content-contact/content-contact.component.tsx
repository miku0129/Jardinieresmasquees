import FacebookLogo from "../../assets/facebook-svgrepo-com.svg?react";
import { Logo } from "./content-contact.styles";

export default function ContentContact() {
  return (
    <div className="px-content-side mb-5 flex flex-col justify-center gap-5">
      <section className="flex flex-col place-self-center-safe">
        <p className="md:text-xl">
          Si vous êtes intéressé, veuillez nous contacter à cette adresse.
        </p>
        <p className="text-gray-500 md:text-xl">
          jardinieres.masquees@protonmail.com
        </p>
      </section>
      <div className="flex items-end gap-1 place-self-center-safe">
        <Logo />
        <a
          href="https://www.facebook.com/jardinieresmasquees"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookLogo style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
    </div>
  );
}
