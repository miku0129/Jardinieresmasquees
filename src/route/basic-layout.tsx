import { Outlet } from "react-router-dom";

import Footer from "../component/footer/footer.component";
import Nav from "../component/nav/nav.component";

export default function BasicLayout() {
  return (
    <div className="relative min-h-screen grid-rows-[auto_1fr_auto]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
