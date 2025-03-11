// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

// creazione card 
export default function MovieCard() {

    return (
        <>
            <h1>titolo moviecard</h1>
            <label >Regista:</label>
            <p>davvero un bel film</p>
            <Link to="/details"> <label>dettagli..</label> </Link>
        </>
    )

}