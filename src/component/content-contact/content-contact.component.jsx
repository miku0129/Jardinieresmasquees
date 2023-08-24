import { Logo, ContactContainer } from "./content-contact.styles";

const ContentContact = () => {
  return (
    <ContactContainer>
      <Logo></Logo>
      <div className="contact-sub-container">
        <p>Si vous êtes intéressé, veuillez nous contacter à cette adresse.</p>
        <p>jardinieres.masquees@divrotonmail.com</p>
      </div>
    </ContactContainer>
  );
};

export default ContentContact;
