import React, { useState } from 'react'

//CSS
import "../newsletter/newsletter.scss"


// APIKALD

import { sendNyhed } from "../../helpers/Apikald";


const NewsLetter = () => {

    // STATES
    const [ messages, setMessage ] = useState()
    const [ fejl, setFejl ] = useState()
    const [ loading, setLoading ] = useState( false )
    
    const handleSubmit = e => {
        e.preventDefault(); // for at undgå at siden reloader ved tryk "submit"

        // Send/POST til API
        const dinnyhed = new FormData( e.target ) // e.target er formularens indhold

        setLoading( true );


        // APIKALD NAVN KALDES - OG VENTER HEREFTER PÅ RESPONS, HVIS DATA KALDES RIGTIGT
        sendNyhed( dinnyhed ).then( response => {

            if ( response ) {

                // console.log( response.message )
                setMessage( response.message )
                setFejl();
                //tøm formular
                e.target.reset();

            } else {

                console.log( "FEJL" )
                // FEJL
                setFejl( true );
                setMessage()
            }

            setLoading( false )

        } )
    }

    return (
        <section className='newsContainer'>

            {/* <h3 className="signup">Tilmeld Nyhedsbrev</h3> */}

            <form onSubmit={ handleSubmit }>


                
                <label><br />
                    <input type="text" name="name" required placeholder='Navn' />
                </label>


                <label><br />
                    <input type="email" name="email" required placeholder='Email Adresse' />
                </label>


                <button className="newsBtn" type='submit'>Send</button>

            </form>


            {
                //HVIS DER ER EN MESSAGE
                messages && <h2>Din besked er sendt</h2>
            }




            {/* HVIS DEN LOADER ELLER DER ER FEJL - SKRIV NEDENSTÅENDE */ }

            {
                loading && <h1>loading ...</h1>
            }

            {
                fejl && <h1>Der er opstået en fejl ...</h1>
            }


        </section>
    )
}

export default NewsLetter;