import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio";
import QueroDoar from "./Pages/QueroDoar/QueroDoar";
import LivrosDoados from "./Pages/LivrosDoados/LivrosDoados";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="livrosDoados" element={<LivrosDoados />} />
          <Route path="queroDoar" element={<QueroDoar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
