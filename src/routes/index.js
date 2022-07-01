import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import '../styles/FooterStyle.css'
import Habitaciones from "../pages/Habitaciones";
import Promociones from "../pages/Promociones";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<Habitaciones />}/>
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
