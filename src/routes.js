import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/PaginaPrincipal/Home"
import BiscoitoDaSorte from './Components/BiscoitodaSorte/App'
import Cronometro from './Components/Cronometro/Cronometro'
import CalculadoraImc from "./Components/CalculadoraImc/CalculadoraImc"

import Header from "./Components/Header/Header"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/biscoitodasorte" element={<BiscoitoDaSorte />} />
                <Route path="/cronometro" element={<Cronometro />} />
                <Route path="/calculadoraimc" element={<CalculadoraImc />} />
            </Routes>
        </BrowserRouter>
    )

}
export default RoutesApp;