import React, { useState, useEffect } from 'react';
import BsTelephone from "@material-ui/icons/PhoneOutlined"
import AiOutlineMail from "@material-ui/icons/MailOutline"
import NewsLetter from '../newsletter/NewsLetter';

// APIkald
import { hentContactInformation, opretBesked } from "../../helpers/Apikald";

//CSS
import "../contact/contact.scss";

const Contact = () => {

    // STATES
    const [ messages, setMessage ] = useState()
    const [ fejl, setFejl ] = useState()
    const [ loading, setLoading ] = useState( false )

    const [ contactinfo, setContactinfo ] = useState()




    //når componentet er klar og er loadet
    useEffect( () => {

        setLoading( true );
        // man har kaldt - og then(så) bliver det besvaret
        hentContactInformation().then( response => {

            if ( response ) {

                // hvis der er fejl, så sæt fejl
                setContactinfo( response )
                setFejl( false )

            } else {

                //hvis det er rigtigt så gør ikke noget
                setFejl( true )
                setContactinfo() // tom data
            }

            setLoading( false );
        } )

    }, [] )


    const handleSubmit = e => {
        e.preventDefault(); // for at undgå at siden reloader ved tryk "submit"

        // Send/POST booking til API
        const dinbesked = new FormData( e.target ) // e.target er formularens indhold

        setLoading( true );


        // SEND NEWSLETTER TIL APIKALDSFILEN // DENNE FUNKTION ER MED TIL AT GØRE SÅ VI KAN OPRETTE EN BESKED
        opretBesked( dinbesked ).then( response => {

            if ( response ) {

                console.log( response.message )
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

        <section id="contact">

            <h2>Kontakt</h2>


            {

                contactinfo &&



                <div className='flex-item contact'>



                    <h3>Kontakt information</h3>
                    <p className='companyName'>{ contactinfo.company }</p>
                    <p>{ contactinfo.address }</p>
                    <p>{ contactinfo.zipcity }</p>
                    <p>{ contactinfo.country }</p>
                    <p> <BsTelephone/>{ contactinfo.phone }</p>
                    <p> <AiOutlineMail />{ contactinfo.email }</p>

                </div>

            }

            {/* Typefeltet skal være korrekt, ellers vises ingen data, og du får fejl */ }


            <form onSubmit={ handleSubmit }>
                
                <h3>Skriv til os</h3>
                <label><br />
                    <input type="text" name="name" required placeholder='Navn' />
                </label>

                <label><br />
                    <input type="text" name="company" required placeholder='Firma/Organisation' />
                </label>


                <label><br />
                    <input type="email" name="email" required placeholder='Email Adresse' />
                </label>


                <label><br />
                    <input type="tel" name="phone" required placeholder='Telefon' />
                </label>


                <label><br />
                    <textarea name="message" placeholder='Besked' cols="30" rows="10"></textarea>
                </label>

                <button type='submit'>Send</button>

            </form>

            {/* HER HENTER VI NYHEDSBREV IND */}

            <NewsLetter />


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

export default Contact