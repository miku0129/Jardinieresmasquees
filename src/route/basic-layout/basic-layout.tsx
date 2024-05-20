import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../component/nav/nav.component";
import Footer from "../../component/footer/footer.component";

import { BasicLayoutContainer } from "./basic-layout.styles";

const BasicLayout = () => {
  return (
    <Fragment>
      <BasicLayoutContainer>
        <Nav />
        <Outlet />
        <Footer />
      </BasicLayoutContainer>
    </Fragment>
  );
};

export default BasicLayout;
