import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// APIKALD
import { hentUdvalgtTour, retTour } from '../helpers/Apikald';

const AdminRet = () => {



    // Snup id fra url-en - så vi ved hvilken treatment der skal indlæses i formularen/rettes
    const { id } = useParams();

    // STATE
    const [ edituser, setEditUser ] = useState() // Tours der skal rettes
    const [ fejl, setFejl ] = useState( false )
    const [ loading, setLoading ] = useState( false )
    const [ besked, setBesked ] = useState()

    // Kald API'et og hent den tour(ud fra id) som skal rettes
    useEffect( () => {


        setLoading( true );
        // man har kaldt - og then(så) bliver det besvaret
        hentUdvalgtTour( id ).then( response => {

            if ( response ) {

                // hvis der er fejl, så sæt fejl
                setEditUser( response )
                setFejl( false )

            } else {

                //hvis det er rigtigt så gør ikke noget
                setFejl( true )
                setEditUser() // tom data
            }

            setLoading( false );
        } )
    }, [] )

    const handleSubmit = ( e ) => {

        e.preventDefault(); // undgå reload af siden

        // Send/POST udvalgt tour til API
        const rettetUser = new FormData( e.target ) // e.target er formularens indhold

        setLoading( true );


        // SEND BOOKING TIL APIKALDSFILEN
        retTour( id, rettetUser ).then( response => {

            if ( response ) {


                setEditUser( "Tour er rettet" )
                setFejl();
                //tøm formular


            } else {


                // FEJL
                setFejl( true );
                setEditUser()
            }

            setLoading( false )

        } )

    }

    return (


        <div>


            <h1>Ret Tour</h1>
            {besked && <h2>Hvis der er en besked så ret her</h2>}

            {
                edituser &&

                <form onSubmit={ handleSubmit }>

                    <label>Titel <br />
                        <input type="text" name="title" defaultValue={ edituser.title } />
                    </label>

                    <br />

                    <label>
                        <br />
                        Beskrivelse <br />
                        <textarea name="content" defaultValue={ edituser.content }></textarea>
                    </label>

                    <br />

                    <div>
                        <h5>Nuværende billede:</h5>
                        <img src={ "http://localhost:5099/images/tours/" + edituser.coverimage } alt="Nuværende billede" width={ 200 } />
                    </div>

                    <label> <br />
                        <input type="file" name="image" />
                    </label>

                    <br />

                    <br />

                    <button type="submit">Ret bruger</button>


                </form>

            }


            {/* HVIS DEN LOADER ELLER DER ER FEJL - SKRIV NEDENSTÅENDE */ }

            {
                loading && <h1>loading ...</h1>
            }

            {
                fejl && <h1>Der er opstået en fejl ...</h1>
            }


        </div>

    )
}

export default AdminRet