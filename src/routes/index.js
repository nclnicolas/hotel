import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Footer from "../components/Footer";
import '../styles/FooterStyle.css'

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
