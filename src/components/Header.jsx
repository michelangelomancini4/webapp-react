// importo parte LInk del modulo react-router
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <header >
            <div >
                <Link to="/" className="header-homeLink">MOVIE-APP!</Link>
            </div>
        </header>
    )

}


export default Header