import { useState, useEffect } from "react";
import axios from "axios";

// importo il component MovieCard per la creazione lista dei film
import MovieCard from "../components/MovieCard"

// creo funzione che mi ritorni lista film nella homepage
const HomePageMovies = () => {


    // destructuring variabili di stato
    const [movies, setMovies] = useState([]);

    // effettuo la chiamata  API al backend per ottenere i dati
    function fetchMovies() {
        axios
            .get("http://localhost:5000/movies")

            // In caso di successo aggiorno lo stato movies con i dati aggiornati
            .then((res) => {
                console.log("Risposta ricevuta dal server:", res.data);
                setMovies(res.data);
            })

            // In caso di errore stampo in console un messaggio
            .catch((err) => console.error("Errore nel recupero dei post:", err));
    }

    // evito il loop della funzione
    useEffect(fetchMovies, []);

    // funzione di rendering delle card dei film
    const renderMovies = () => {

        // mappo movies per generare la card con i dati del film
        return movies?.map(
            movie => {
                return (

                    <MovieCard key={movie.id} movieProps={movie} />
                )
            }
        )
    }

    return (
        <>
            <h1 className="homelist-title">Lista film preferiti della community!</h1>
            <div className="movies-container">
                {renderMovies()}
            </div>

        </>
    )
}

export default HomePageMovies