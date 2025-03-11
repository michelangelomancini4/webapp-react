// importo le recensioni da aggiungere alla pagina dei dettagli del film
import MovieReviewCard from "../components/MovieReviewCard"

// creo funzione che mi ritorni scheda dei dettagli del film
const MovieDetails = () => {
    return (
        <>
            <div className="moviecard-detail-container">
                <h1>titolo moviecard</h1>
                <label >Regista:</label>
                <p>voto: davvero un bel film</p>
                <MovieReviewCard />
            </div>

        </>
    )
}

export default MovieDetails