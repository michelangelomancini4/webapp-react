// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

// creazione card del film con prop ricevuta da HomePage.jsx 
export default function MovieCard({ movieProps }) {


    // destructuring per usare i dati nell'output
    const { id, title, director, abstract, image } = movieProps;



    return (
        <>
            <div className="movie-card">

                <h2 className="movietitle">{movieProps.title}</h2>
                <img className="movieimage" src={movieProps.image} alt={movieProps.title} />
                <label ><strong>Regista:</strong>{movieProps.director}</label>
                <p><strong>Plot:</strong> {movieProps.abstract} </p>
                <Link to={`/movie/${id}`}> <button className="seemore-button" >Vedi Info!</button > </Link>

            </div>

        </>
    )

}