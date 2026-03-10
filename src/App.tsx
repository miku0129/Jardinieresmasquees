import { Route, Routes } from "react-router-dom";

import Gallery from "./component/gallery.component";
import PhotoViewer from "./component/photo-viewer.component";
import BasicLayout from "./route/basic-layout/basic-layout";
import Home from "./route/home/home.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />}/>
        <Route path="photoviewer/:photoIndex" element={<PhotoViewer/>}/>
      </Route>
    </Routes>
  );
}

export default App;
