// importo  rotte modulo react-router per la parte di gestione
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importo il layout base
import DefaultLayout from "./layout/DefaultLayout"

// importo pagine
import HompePage from "./pages/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from './pages/NotFoundPage';
import CreateMoviePage from './pages/CreateMoviePage';



function App() {

  // Definizione rotte per la webapp 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HompePage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
          <Route path="/movies/create" element={<CreateMoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
