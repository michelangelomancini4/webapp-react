// creo funzione che generi le recensioni(con autori e voti) da aggiungere alla scheda dei dettagli del film
const MovieReview = ({ MovieDetailsProp }) => {

    // destructuring per usare i dati nell'output
    const { name, vote, text } = MovieDetailsProp;

    return (
        <>
            <p><strong>Recensione:</strong> {MovieDetailsProp.text || 'No descriptions avaible!'}</p>
            <p><strong>Voto:</strong>{MovieDetailsProp.vote || 'Not reviewd'}</p>
            <label><strong>Review by:</strong>{MovieDetailsProp.name || 'Anonymous'}</label>
        </>
    )
}

export default MovieReview