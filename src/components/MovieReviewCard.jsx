// creo funzione che generi le recensioni(con autori e voti) da aggiungere alla scheda dei dettagli del film
const MovieReview = ({ MovieDetailsProp }) => {

    // destructuring per usare i dati nell'output
    const { name, vote, text } = MovieDetailsProp;

    // output stars rating per il voto
    function getStars(vote) {
        const stars = Math.ceil(vote);
        const starsArray = [];

        for (let i = 0; i < stars; i++) {
            starsArray.push(<i key={i} className="fas fa-star"></i>);
        }
        for (let i = stars; i < 5; i++) {
            starsArray.push(<i key={i} className="far fa-star"></i>);
        }

        return starsArray;
    }

    return (
        <>
            <div className="singlereview-container">
                <label ><strong>Review by:</strong>{MovieDetailsProp.name || 'Anonymous'}</label>
                <span className="vote"><strong>Voto:</strong>{MovieDetailsProp.vote || 'Not reviewd'} {getStars(vote)}</span>
                <p><strong>Recensione:</strong> {MovieDetailsProp.text || 'No descriptions aviable!'}</p>
            </div>

        </>
    )
}

export default MovieReview