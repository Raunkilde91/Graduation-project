import React, { useState, useEffect } from 'react';
import parse from "html-react-parser";

//CSS
import "../about/about.scss"



//APIkald
import { hentAbout } from "../../helpers/Apikald";

const About = () => {

  const [ about, setAbout ] = useState()
  const [ fejl, setFejl ] = useState()
  const [ loading, setLoading ] = useState( false )


  //når componentet er klar og er loadet
  useEffect( () => {

    setLoading( true );
    // man har ringet - og then(så) bliver det besvaret
    hentAbout().then( response => {

      if ( response ) {

        // hvis der er fejl, så sæt fejl
        setAbout( response )
        setFejl( false )

      } else {

        //hvis det er rigtigt så gør ikke noget
        setFejl( true )
        setAbout() // tom data
      }

      setLoading( false );
    } )

  }, [] )


  return (

    // && betyder "hvis der er noget så vis det man skriver efter &&"

    <div id='about'>

      <h2>Om os</h2>

      {/* Da vi kun skal have ét billede ud, bruges ._ metoden. Her mappes derfor ikke. */ }

      {
        about &&
        <div className="aboutGrid" key={ about._id }>

          <div className="aboutContent">{ parse( about.content ) }</div>
          <img className="aboutImg" src={ "http://localhost:5099/images/about/" + about.image } alt="Picture of company buss" width={ 400 } />

        </div>

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

export default About