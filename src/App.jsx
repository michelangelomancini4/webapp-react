// importo  rotte modulo react-router per la parte di gestione
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importo il layout base
import DefaultLayout from "./layout/DefaultLayout"

// importo homepage , MovieDetailsPage e NotFoundPage
import HompePage from "./pages/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from './pages/NotFoundPage';


function App() {

  // Definizione rotte per la webapp 
  // route padre: DefaultLayout   -  figli: HompePage , MovieDetailsPage

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HompePage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
