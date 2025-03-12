import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


// importo le recensioni da aggiungere alla pagina dei dettagli del film
import MovieReviewCard from "../components/MovieReviewCard"

// creo funzione che mi ritorni scheda dei dettagli del film
const MovieDetails = () => {

    //  ottengo l' id con useParams 
    const { id } = useParams();

    // destructuring variabili di stato
    const [movieDetailsState, setMovieDetailsState] = useState({});

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
            .catch((err) => console.error("Errore nel recupero dei post:", err));
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
            <div className="moviecard-detail-container">
                <h1 className="moviecard-detail-title">{movieDetailsState.title}</h1>
                <img className="movieimage-detail" src="./../../public/moviescover/defaultimage.jpg" alt={movieDetailsState.title} />
                <br />
                <span><strong>Regista:</strong>{movieDetailsState.director}</span>
                <p><strong>abstract:</strong> {movieDetailsState.abstract} </p>
                <h3>Our community reviews</h3>
                {renderMovieDetails()}
            </div>

        </>
    )
}

export default MovieDetails