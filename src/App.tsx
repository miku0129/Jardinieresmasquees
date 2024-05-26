import { Route, Routes } from "react-router-dom";
import { AnchorProvider } from "react-anchor-navigation";

import BasicLayout from "./route/basic-layout/basic-layout";
import Home from "./route/home/home.route";
import Gallery from "./component/gallery/gallery.component";

function App() {
  return (
    <AnchorProvider>
      <div>{/* TypeScriptの型解決のためのdiv */}</div>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </AnchorProvider>
  );
}

export default App;
