// importo parte LInk del modulo react-router
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <nav >
            <div >
                <Link to="/" className="header-homeLink">MOVIE-APP!</Link>
            </div>
        </nav>
    )

}


export default Header