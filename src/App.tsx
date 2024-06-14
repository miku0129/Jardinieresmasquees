import { Route, Routes } from "react-router-dom";

import BasicLayout from "./route/basic-layout/basic-layout";
import Home from "./route/home/home.route";
import Gallery from "./component/gallery/gallery.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
