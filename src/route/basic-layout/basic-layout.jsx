import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../component/nav/nav.component";
import Footer from "../../component/footer/footer.component";

import "./basic-layout.styles.scss";

const BasicLayout = () => {
  return (
    <Fragment>
      <div className="basic-layout-container">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default BasicLayout;
