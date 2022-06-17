import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";


const App = () => {
    return(
        <>
        <div>
            <NavBar />
            <Home />
        </div>
        </>
    )
}
export default App;