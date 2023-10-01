import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ApplyOnline from "./pages/ApplyOnline";
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
        </Routes>
    </Layout>
  );
};

export default App;
