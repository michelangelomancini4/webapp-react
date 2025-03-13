// importo axios per effettuare la chiamata al be
import axios from "axios";

// importo useState per salvare info immesse dall'utente
import { useState } from "react";


const ReviewForm = ({ movie_id, fetchmovieDetails }) => {

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
                    setFormData(initialState);
                    // aggiorno in pagina la review
                    fetchmovieDetails()
                }
            )
            .catch(err => console.log(err)
            )

    }

    return (
        <>

            <h5 id="submit-title">Aggiungi la tua review!</h5>

            <div className="review-form-container" >

                <div >
                    <form onSubmit={submitReview}>
                        <div >
                            <input type="text" name="name" value={formData.name} onChange={setFieldValue} placeholder="Nome" />
                        </div>
                        <div >
                            <textarea name="text" value={formData.text} onChange={setFieldValue} placeholder="Scrivi la tua recensione.."></textarea>
                        </div>
                        <div >
                            <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} placeholder="Voto" />
                        </div>
                        <div >
                            <button type="submit" >
                                Invia!
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
export default ReviewForm