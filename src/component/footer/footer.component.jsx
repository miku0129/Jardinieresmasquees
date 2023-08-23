import { FooterContainer } from "./footer.styles";

const Footer = () => {
  const groupName = "Jardinieres masquées de Tours";
  return (
    <FooterContainer>
      <div className="footer-sub-container">
        <div>&#169;{groupName}</div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
