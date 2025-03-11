// importo MovieCard per creare lista dei film
import MovieCard from "../components/MovieCard"

// creo funzione che mi ritorni lista film
const HomePageFilms = () => {
    return (
        <>
            <h1 className="homelist-title">Lista film preferiti della community!</h1>
            <div className="movies-container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </>
    )
}

export default HomePageFilms