// importo MovieCard per creare lista dei film
import MovieCard from "../components/MovieCard"

// creo funzione che mi ritorni lista film
const HomePageFilms = () => {
    return (
        <>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </>
    )
}

export default HomePageFilms