// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

// creazione card 
export default function MovieCard() {

    return (
        <>
            <div className="movie-card">
                <h1 className="movietitle">titolo moviecard</h1>
                <label >Regista:</label>
                <p>davvero un bel film</p>
                <Link to="/details"> <button className="seemore-button" >dettagli..</button > </Link>
            </div>

        </>
    )

}