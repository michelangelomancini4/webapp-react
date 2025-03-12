// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div >
            <h1>Page Not Found</h1>
            <p >The Page you are looking for doesn't exist or an other error occurred. Go back, or  choose a new direction.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage