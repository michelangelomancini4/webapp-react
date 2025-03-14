import axios from "axios";
// importo LInk e useNavigate del modulo react-router per navigare tra le rotte
import { Link, useNavigate } from "react-router-dom"

// importo lo useState
import { useState } from "react";

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:5000/movies";


const CreateMoviePage = () => {


    const navigate = useNavigate();


    const [formDataObj, setFormDataObj] = useState(initialData);



    // Funzione per aggiornare i campi del form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }



    const handleSubmit = (e) => {
        e.preventDefault();


        // // Invio i dati al backend con axios 
        axios.post(endpointApi, formDataObj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(

                // redirect verso la HOME
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div>
                <h1>Aggiungi un nuovo film!</h1>
            </div>

            <section id="book-form">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formDataObj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Director:</label>
                        <input
                            className="form-control"
                            name="director"
                            type="text"
                            value={formDataObj.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Plot:</label>
                        <textarea
                            value={formDataObj.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Indietro</Link>
                        <button className="btn btn-success" type="submit">
                            Aggiungi Film!
                        </button>
                    </div>
                </form>
            </section>
        </>

    )
}

export default CreateMoviePage