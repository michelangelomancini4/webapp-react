// importo axios per effettuare la chiamata al be
import axios from "axios";

// importo useState per salvare info immesse dall'utente
import { useState } from "react";

const ReviewForm = ({ movie_id }) => {

    // imposto valori iniziali da aggiornare nello usestate
    const initialState = { name: "", text: "", vote: 1 };

    // variabile di stato per il form
    const [formData, setFormData] = useState(initialState);


    // funzione per aggiornare stato form 
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // endpoint be con id dinamico
    const urlEndpoint = `http://localhost:5000/movies/${movie_id}/reviews`;


    // funzione per gestire il submit del form 
    const submitReview = (e) => {

        // evito che si ricarichi la pagina
        e.preventDefault();

        // chiamate per inviare dati al be e inserirli nel db
        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {

                    // svuoto il form dopo l'invio
                    setFormData(initialState)
                }
            )
            .catch(err => console.log(err)
            )

    }

    return (
        <div >
            <header >
                <h5>Aggiungi la tua review!</h5>
            </header>
            <div >
                <form onSubmit={submitReview}>
                    <div >
                        <label>Nome</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div >
                        <label>Recensione:</label>
                        <textarea name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>
                    <div >
                        <label>Voto:</label>
                        <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div >
                        <button type="submit" >
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )

}
export default ReviewForm