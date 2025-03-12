// creo funzione che generi le recensioni(con autori e voti) da aggiungere alla scheda dei dettagli del film
const MovieReview = ({ MovieDetailsProp }) => {

    // destructuring per usare i dati nell'output
    const { name, vote, text } = MovieDetailsProp;

    return (
        <>
            <div className="singlereview-container">
                <label ><strong>Review by:</strong>{MovieDetailsProp.name || 'Anonymous'}</label>
                <p className="vote"><strong>Voto:</strong>{MovieDetailsProp.vote || 'Not reviewd'}</p>
                <p><strong>Recensione:</strong> {MovieDetailsProp.text || 'No descriptions avaible!'}</p>
            </div>

        </>
    )
}

export default MovieReview