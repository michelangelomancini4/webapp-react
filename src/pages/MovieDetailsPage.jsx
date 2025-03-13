import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// importo link per gestire prev-next
import { Link } from "react-router-dom";


// importo le recensioni da aggiungere alla pagina dei dettagli del film
import MovieReviewCard from "../components/MovieReviewCard"

// import del componente di form
import ReviewForm from './../components/ReviewForm';

// creo funzione che mi ritorni scheda dei dettagli del film
const MovieDetails = () => {

    //  ottengo l' id con useParams 
    const { id } = useParams();

    // destructuring variabili di stato
    const [movieDetailsState, setMovieDetailsState] = useState({});

    // associo useNavigate a 'redirect'
    const redirect = useNavigate();


    // effettuo la chiamata  API al backend per ottenere i dati aiutandomi con l'id 
    function fetchmovieDetails() {
        axios
            .get(`http://localhost:5000/movies/${id}`)

            // In caso di successo aggiorno lo stato movieDetails con i dati aggiornati
            .then((res) => {
                console.log("Risposta ricevuta dal server:", res.data);
                setMovieDetailsState(res.data);
            })

            // In caso di errore stampo in console un messaggio
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            }

            )
    }

    // evito il loop della funzione
    useEffect(fetchmovieDetails, [id]);


    // funzione di rendering
    const renderMovieDetails = () => {

        // mappo movieDetailsState per generare la card con i dati del film (movieDetailCard) che passerò come prop a MovieReviewCard
        return movieDetailsState.reviews?.map(
            movieDetailCard => {
                return (

                    <MovieReviewCard key={movieDetailCard.id} MovieDetailsProp={movieDetailCard} />
                )
            }
        )
    }

    return (
        <>
            {/* logica per gestire visualizzazione film/serie precedente o successiva */}
            < div className="prevnext" >
                <Link to={id > 1 ? `http://localhost:5173/movie/${id - 1}` : ''} className='prevnext' >&#8678;  PREV- </Link>
                <Link to={id < 5 ? `http://localhost:5173/movie/${parseInt(id) + 1}` : ''} className='prevnext' >-NEXT &#8680;</Link>
            </div >
            <div className="moviecard-detail-container">
                <div className="card-detailcontainer">
                    <section>
                        <h1 className="moviecard-detail-title">{movieDetailsState.title}</h1>
                        <img className="movieimage-detail" src={movieDetailsState.image} alt={movieDetailsState.title} />
                    </section>

                    <section>
                        <span><strong>Regista:</strong>{movieDetailsState.director}</span>
                        <p><strong>abstract:</strong> {movieDetailsState.abstract} </p>
                    </section>

                </div>
                <div className="reviewcontainer">
                    <h3>Our community reviews</h3>
                    {renderMovieDetails()}
                </div>

            </div>
            <div>
                <ReviewForm movie_id={movieDetailsState.id} fetchmovieDetails={fetchmovieDetails} />
            </div>
        </>
    )
}

export default MovieDetails