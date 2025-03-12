// creo funzione che generi le recensioni(con autori e voti) da aggiungere alla scheda dei dettagli del film
const MovieReview = ({ MovieDetailsProp }) => {

    // destructuring per usare i dati nell'output
    const { name, vote, text } = MovieDetailsProp;

    return (
        <>
            <p> {MovieDetailsProp.text}</p>
            <p><strong>Voto:</strong>{MovieDetailsProp.vote}</p>
            <label>Review by:{MovieDetailsProp.name}</label>
        </>
    )
}

export default MovieReview