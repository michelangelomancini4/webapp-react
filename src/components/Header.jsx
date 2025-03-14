// importo parte LInk del modulo react-router
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <header >
            <div>
                <Link to="/" className="header-homeLink">MOVIE-APP!</Link>
                <Link to="/movies/create" className="addmovie-button" >Inserisci nuovo Libro!</Link>
            </div>
        </header>
    )

}


export default Header