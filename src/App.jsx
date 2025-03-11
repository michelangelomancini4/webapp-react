// importo  rotte modulo react-router per la parte di gestione
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importo il layout base
import DefaultLayout from "./layout/DefaultLayout"

// importo homepage e MovieDetailsPage
import HompePage from "./pages/HomePage"
// import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {

  // Definizione rotte per la webapp 
  // route padre: DefaultLayout   -  figli: HompePage , MovieDetailsPage

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HompePage />}></Route>
          {/* <Route path="/details" element={<MovieDetailsPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
