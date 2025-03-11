// importo le recensioni da aggiungere alla pagina dei dettagli del film
import MovieReviewCard from "../components/MovieReviewCard"

// creo funzione che mi ritorni scheda dei dettagli del film
const MovieDetails = () => {
    return (
        <>
            <div className="moviecard-detail-container">
                <h1 className="moviecard-detail-title">titolo moviecard</h1>
                <img className="movieimage-detail" src="./../../public/moviescover/defaultimage.jpg" alt="" />
                <br />
                <span >Regista:</span>
                <p>abstract: davvero un bel film</p>
                <h3>Our community reviews</h3>
                <MovieReviewCard />
            </div>

        </>
    )
}

export default MovieDetails