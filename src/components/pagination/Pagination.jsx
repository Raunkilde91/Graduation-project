
import React, { useState } from "react"; import './pagination.scss';


const Pagination = ( { itemsPerPage, totalItems, paginate } ) => {
    
    // Regnestykke - hvor meget indhold der er i alt /divideret/ antal produkter per side = side 1 2 3 4 osv. 'klikbare sidenumre

    const [ activePage, setActivePage ] = useState( 1 )

    // Variabel som viser hvor mange sider der skal laves, beregnes ud fra amtal items pr. side og items ialt
    // fx. 100 produkter og der skal vises 20 produkter på hver side... hvor mange sider bliver der så? = 5
    
    const totalPageNumbers = Math.ceil( totalItems / itemsPerPage ); // her runder vi op. ceil betyder op - floor betyder ned // alt det der skal ske når der klikkes på en side eller frem og tilbage

    const changePage = pageClicked => {
        if ( pageClicked < 1 ) pageClicked = 1; // pageClicked må ikke blive mindre end 1 (0 -1 -2 osv.) HVIS så skal den være = 1
        if ( pageClicked > totalPageNumbers ) pageClicked = totalPageNumbers; // pageClicked må ikke blive størrer end 'antal-sider' (totalpagenumber) 
        paginate( pageClicked );
    }


    
    return (
        <div className="paginationNav">
            <ul className="pagination"> <li onClick={ () => changePage( activePage - 1 ) }>tilbage</li> { // index er en tæller
                Array.from( { length: totalPageNumbers }, ( item, index ) =>
                    <li onClick={ () => changePage( index + 1 ) } key={ index } className={ index + 1 === activePage ? 'pageactive' : '' } >
                        { index + 1 }
                    </li>
                )
            }
                <li onClick={ () => changePage( activePage + 1 ) }>frem</li>
            </ul>
        </div>
    );
}; export default Pagination;

