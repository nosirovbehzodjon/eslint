import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import * as Pages from "./pages";

const routes = [
  {
    path: "/",
    title: "Home",
    element: <Pages.Home />,
  },
  {
    path: "/about",
    title: "About",
    element: <Pages.About />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <Pages.Contact />,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar routes={routes} />
      <div className="App-container">
        <Routes>
          {/* 
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/contact" element={<Pages.Contact />} />
          */}
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
