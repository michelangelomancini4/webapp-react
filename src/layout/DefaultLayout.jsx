// importo Outlet per gestione contenuti
import { Outlet } from "react-router-dom"

// importo l'header da components
import Header from "../components/Header"


// funzione che mi ritorna il layout di base dell 'app (header + main)
export default function DefaultLayout() {

    return (

        <>
            <Header />

            <main>
                <Outlet />
                <span>ciao</span>
            </main>
        </>
    );
}

