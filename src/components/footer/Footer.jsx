import React, { useState, useEffect } from 'react';


//CSS
import "../footer/footer.scss"


//APIkald
import { hentFooter } from "../../helpers/Apikald";

const Footer = () => {

    const [ footer, setFooter ] = useState()
    const [ fejl, setFejl ] = useState()
    const [ loading, setLoading ] = useState( false )

    //når componentet er klar og er loadet
    useEffect( () => {

        setLoading( true );
        // man har kaldt - og then(så) bliver det besvaret
        hentFooter().then( response => {

            if ( response ) {

                // hvis der er fejl, så sæt fejl
                setFooter( response )
                setFejl( false )

            } else {

                //hvis det er rigtigt så gør ikke noget
                setFejl( true )
                setFooter() // tom data
            }

            setLoading( false );
        } )

    }, [] )


    return (

        // && betyder "hvis der er noget så vis det man skriver efter &&"


        <footer className='flex-container' id="footer">

         
            {

                footer &&

                
                    
                    <p className="footerText"><>©</>{ footer.footertext}</p>

               

            }

            {
                loading && <h1>loading ...</h1>
            }

            {
                fejl && <h1>Der er opstået en fejl ...</h1>
            }
        </footer>

    )

}

export default Footer