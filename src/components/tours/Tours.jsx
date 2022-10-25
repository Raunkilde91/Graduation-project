import React, { useState, useEffect } from 'react'
import parse from "html-react-parser";
import Modal from "../modal/Modal";


import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card"
import StarIcon from "@material-ui/icons/Star";

// Import af pagination 
import Pagination from "../pagination/Pagination";


//APIkald
import { hentTours } from "../../helpers/Apikald";

//CSS
import "../tours/tours.scss"


const Tours = () => {



  // STATES
  const [ tours, setTour ] = useState()
  const [ fejl, setFejl ] = useState()
  const [ loading, setLoading ] = useState( false )


  // PAGINATION START

  const [ currentPage, setCurrentPage ] = useState( 1 ); // Den side vi er på NU
  const [ itemsPerPage, setItemsPerPage ] = useState( 3 ); // Antal produkter pr. side

  //Variabler som skal rumme page-værdier
  let indexOfLastItem, indexOfFirstItem, currentItems
  // ------------------------------------ Pagination
  // side 3, 10 items/produkter/treatments pr. side, 100 items i alt.

  if ( tours && tours.length ) {

    indexOfLastItem = currentPage * itemsPerPage;  // 3*10=30
    indexOfFirstItem = indexOfLastItem - itemsPerPage;
  }

  // FUNKTION til pagination-child så den kan ændre state som afgør hvilken "side" (produkter) der skal vises

  const paginate = ( pageNumber ) => setCurrentPage( pageNumber )




  // PAGINATION SLUT




  //når componentet er klar og er loadet laver vi en useEffect
  useEffect( () => {

    setLoading( true );
    // man har kaldt - og then(så) bliver det besvaret
    hentTours().then( response => {


      setTour( response );
      // setNewtour();
      setFejl();


      setLoading( false );
    } )

      .catch( ( err ) => {

        setFejl( "hej" );
        setTour();
      } )

  }, [] )


  const handleToggleModal = () => {

    let target = document.querySelector( "#modal" );

    // Hvis den har en activeclass på elementet, så tilføjer den active, eller fjerner den hvis der ikke er.
    target.classList.toggle( "active" );
    // setNewtour(<h1>dav</h1>);
  }


  return (



    <article id='tours'>


      <h2>Rejsemål</h2>




      {/* Her mapper vi indeholdet ud fra postman - både tekst og billeder mm.  */ }

      {
        tours &&
        <>

          <Pagination className="pagination" itemsPerPage={itemsPerPage} totalItems={tours.length} paginate={paginate}/>




          {

            tours
            
            .slice(indexOfFirstItem,indexOfLastItem).map( t =>



              <>
                <Card className="cards" key={ t._id } >

                  <Card.Img variant="top" src={ "http://localhost:5099/images/tours/" + t.coverimage } alt="travel distinations" width={ 200 } />
                  <div className="toursInfo">
                    <h3 className='cardTitle'>{ t.title }  <StarIcon />   <StarIcon /></h3>

                    {/* toLocaleDateString anvendes for at synliggøre datoformater, så de kan læses ordentlig at brugeren. */ }
                    <h5 className='travelDate'>{ new Date( t.traveldate ).toLocaleDateString( "da-DK", { year: 'numeric', month: 'long', day: 'numeric' } ) }</h5>
                    <p className='cardTeaser'>{ t.teaser }</p>

                    <button className="tourBtn" onClick={ handleToggleModal }>Læs Mere</button>


                  </div>




                </Card>

                <Modal>



                  <article className="modalDesign">

                    <h3 className='cardTitle'>{ t.title }  < StarIcon />   <StarIcon /></h3>
                    <h4>Du får:</h4>
                    <p className='cardTeaser'>{ t.teaser }</p>
                    <div className='content'>{ parse( t.content ) }</div>
                    <div className="border"></div>
                    <h4>Værelsestyper:</h4>
                    <p className='roomType'>{ parse( t.roomtype ) }</p>
                    {/* toLocaleDateString anvendes for at synliggøre datoformater, så de kan læses ordentlig at brugeren. */ }
                    <h5 className='travelDate'>{ new Date( t.traveldate ).toLocaleDateString( "da-DK", { year: 'numeric', month: 'long', day: 'numeric' } ) }</h5>
                    <div className="border"></div>

                  </article>


                </Modal>
              </>


            )

          }


        </>
      }



      {/* HVIS DEN LOADER ELLER DER ER FEJL - SKRIV NEDENSTÅENDE */ }

      {
        loading && <h1>loading ...</h1>
      }

      {
        fejl && <h1>Der er opstået en fejl ...</h1>
      }

    </article>



  )
}

export default Tours