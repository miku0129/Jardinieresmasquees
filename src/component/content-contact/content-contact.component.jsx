import { ReactComponent as FacebookLogo } from "../../assesst/facebook-svgrepo-com.svg";

import { Logo, ContactContainer } from "./content-contact.styles";

const ContentContact = () => {
  return (
    <ContactContainer>
      <div className="icons">
        <div className="group-logo">
          <Logo></Logo>
        </div>
        <div className="facebook-logo">
          <a href="https://www.facebook.com/jardinieresmasquees" target="_blank">
          <FacebookLogo style={{ width: "30px", height: "30px" }} />

          </a>
        </div>
      </div>
      <div className="contact-sub-container">
        <p>Si vous êtes intéressé, veuillez nous contacter à cette adresse.</p>
        <p>jardinieres.masquees@divrotonmail.com</p>
      </div>
    </ContactContainer>
  );
};

export default ContentContact;
