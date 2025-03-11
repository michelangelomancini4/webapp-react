// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

// creazione card 
export default function MovieCard() {

    return (
        <>
            <div className="movie-card">
                <img className="movieimage" src="./../../public/moviescover/defaultimage.jpg" alt="" />
                <h2 className="movietitle">titolo moviecard</h2>
                <label ><strong>Regista:</strong>Stanley Kubrick</label>
                <p><strong>abstract:</strong> Arancia meccanica - A Clockwork Orange è un film del 1971 scritto, diretto e prodotto da Stanley Kubrick. </p>
                <Link to="/details"> <button className="seemore-button" >dettagli..</button > </Link>
            </div>

        </>
    )

}