import "./footer.styles.scss";

const Footer = () => {
  const groupName = "Jardinieres masquées de Tours";
  return (
    <div className="footer-container">
      <div className="footer-sub-container">
        <div>&#169;{groupName}</div>
      </div>
    </div>
  );
};

export default Footer;
