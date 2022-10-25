import React, { useState, useEffect } from 'react'

// import "../adminnews/adminnews.scss"

// APIKALD

import { hentAlleNews, sletNews } from '../../helpers/Apikald'


const AdminNews = () => {

    // STATES
    const [ news, setNews ] = useState()
    const [ fejl, setFejl ] = useState()
    const [ loading, setLoading ] = useState( false )

    // state til slet-function
    const [ besked, setBesked ] = useState()

    //når componentet er klar og er loadet laver vi en useEffect
    useEffect( () => {

        setLoading( true );
        // man har ringet - og then(så) bliver det besvaret
        hentAlleNews().then( response => {

            if ( response ) {

                // hvis der er fejl, så sæt fejl
                setNews( response )
                setFejl( false )

            } else {

                //hvis det er rigtigt så gør ikke noget
                setFejl( true )
                setNews() // tom data
            }

            setLoading( false );
        } )

    }, [ besked ] ) // besked gør at den får state med og sletter når man trykker på papirkurven



    // onClick function - gør at man kan trykke på papirkurven og slette
    const handleSlet = ( id ) => {

        // denne if sætning gør, at man får en mulighed for at sige nej til at slette når man har trykket
        if ( window.confirm( "Vil du slette?" ) ) {


            setLoading( true );
            // man har ringet - og then(så) bliver det besvaret
            sletNews( id ).then( response => {

                if ( response ) {

                    // hvis der er fejl, så sæt fejl
                    setBesked( "Tilmelding er slettet " + id )


                } else {

                    //hvis det er rigtigt så gør ikke noget
                    setBesked( "Noget gik galt - intet er slettet" )

                }

                setLoading( false );
            } )

        }


    }

    return (
        <section>

            {
                news && news.map( index => {

                    // INDEX ER DET SOM VI KALDER, SÅ VI KAN FÅ INDHOLDET UD

                    return (
                        <div>
                            <p>{ index.name }</p>
                            <p>{ index.email }</p>
                            <button onClick={ () => handleSlet( index._id ) }>Slet tilmelding</button>
                        </div>
                    )
                } )


            }

        </section>
    )
}

export default AdminNews