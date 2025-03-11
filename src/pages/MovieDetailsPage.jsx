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
                <span><strong>Regista:</strong>Stanley Kubrick</span>
                <p><strong>abstract:</strong> Arancia meccanica - A Clockwork Orange è un film del 1971 scritto, diretto e prodotto da Stanley Kubrick. </p>
                <h3>Our community reviews</h3>
                <MovieReviewCard />
            </div>

        </>
    )
}

export default MovieDetails