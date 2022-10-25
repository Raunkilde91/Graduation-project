import React, { useState, useEffect } from 'react'


// CSS
import "../Admin/adminopret.scss"

//APIkald
import { opretTour } from '../helpers/Apikald'

const AdminOpret = () => {



  // STATES
  const [ fejl, setFejl ] = useState()
  const [ loading, setLoading ] = useState( false )
  const [ besked, setBesked ] = useState()

  // Siden reloader ikke når man trykker på knappen
  const handleSubmit = ( e ) => {
    e.preventDefault();

    // Send/POST user til API
    const tour = new FormData( e.target ) // e.target er formularens indhold

    setLoading( true );


    // SEND SKEMA TIL APIKALDSFILEN / Hvis nedenstående er korrekt, vil ny være oprettet
    opretTour( tour ).then( response => {

      if ( response ) {


        setBesked( "Ny oprettet" );
        setFejl();
        // Her tømmer vi formularen
        e.target.reset();

      } else {

        console.log( "FEJL" )
        // FEJL VISES HVIS DER ER DETTE
        setFejl( true );
        setBesked()
      }

      setLoading( false )

    } )

  }

  return (

    // article da det er indhold for sig selv på en anden side.
    <article>



      {
        besked && <h2 className='alert'>{ besked }</h2>
      }


      <div className="formContainer">


        <h1>Rejsemål</h1>


        <form onSubmit={ handleSubmit }>

          <label>Titel <br />
            <input type="text" name="title" />
          </label>

          <br />

          <label>
            <br />
            Teaser<br />
            <textarea name="teaser" />
          </label>

          <br />

          <label>
            <br />
            Beskrivelse<br />
            <textarea name="content" />
          </label>

          <br />

          <label>
            <br />
            Værelser<br />
            <input type="number" name="roomtype" />
          </label>

          <br />

          <label>
            <br />
            Rejsetidspunkt<br />
            <input type="date" name="traveldate" />
          </label>

          <br />

          <label>
            <br />
            ....<br />
            <input type="number" name="duration" />
          </label>

          <br />

          <label>
            <br />
            Minimumpris<br />
            <input type="number" name="priceminimum" />
          </label>

          <br />

          <label>
            <br />
            Maximumpris<br />
            <input type="number" name="pricemaximum" />
          </label>

          <br />

          <label>
            <br />
            Tourscore<br />
            <input type="number" name="rating" />
          </label>

          <br />

          <label>
            <br />
            Filer<br />
            <input type="file" name="image" />
          </label>

          <br />

          <label>
            <br />
            Galleri<br />
            <input type="file" name="galleryimages" />
          </label>

          <br />




          <br />

          <button type="submit">Send</button>


        </form>

      </div>

      {
        loading && <h1>loading ...</h1>
      }

      {
        fejl && <h1>Der er opstået en fejl ...</h1>
      }

    </article>


  )
}

export default AdminOpret