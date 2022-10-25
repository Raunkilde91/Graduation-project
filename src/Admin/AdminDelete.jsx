import React, { useState, useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';


// CSS
import "../Admin/admindelete.scss";

//APIkald
import { hentTours, sletTours} from "../helpers/Apikald";


const Slet = () => {

  // STATES
  const [ slettour, setTouren ] = useState()
  const [ fejl, setFejl ] = useState()
  const [ loading, setLoading ] = useState( false )

  // state til slet-function
  const [ besked, setBesked ] = useState()

  //når componentet er klar og er loadet laver vi en useEffect
  useEffect( () => {

    setLoading( true );
    // man har ringet - og then(så) bliver det besvaret
    hentTours().then( response => {

      if ( response ) {

        // hvis der er fejl, så sæt fejl
        setTouren( response )
        setFejl( false )

      } else {

        //hvis det er rigtigt så gør ikke noget
        setFejl( true )
        setTouren() // tom data
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
      sletTours( id ).then( response => {

        if ( response ) {

          // hvis der er fejl, så sæt fejl
          setBesked( "Du har nu slettet treatment med Id " + id )


        } else {

          //hvis det er rigtigt så gør ikke noget
          setBesked( "Noget gik galt - intet er slettet" )

        }

        setLoading( false );
      } )

    }


  }




  return (
    <div className='adminSlet'>

      {
        
        slettour &&



        <table>

          <thead>
            <tr>
              <th className="span" colSpan="2"></th>
              <th className="span" colSpan="2"><Link to="/admin/admindelete">Slet ny</Link></th>
            </tr>

            <tr>
              <th>Navn</th>
              <th>Thumb</th>
              <th>Ret</th>
              <th>Slet</th>
            </tr>
          </thead>

          <tbody>


            {
              // her mapper vi

                slettour.map( t =>
                <tr key={ t._id }>
                  <td><img src={ "http://localhost:5099/images/tours/" + t.coverimage } style={{width: "300px"}} /></td>
                  <td>{ t.title }</td>
                  <td className='icon'><Link to={"/admin/tours/" + t._id}><AiFillEdit/></Link></td>
                  <td className='icon'><AiFillDelete onClick={ () => handleSlet( t._id ) } /></td>

                </tr>
              )
            }

          </tbody>


        </table>

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

export default Slet