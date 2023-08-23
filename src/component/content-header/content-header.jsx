import { Fragment } from "react";

import { Header } from "./content-header.styles";

const ContentHeader = () => {
  return (
    <Fragment>
      <Header>
        <div className="header-contents">
          <p>Bienvenue sur</p>
          <h2>Jardinieres masquées</h2>
        </div>
      </Header>
    </Fragment>
  );
};

export default ContentHeader;
