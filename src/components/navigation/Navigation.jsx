import React, { useState } from 'react'
import companyLogo from "../../images/logo.png";


// CSS
import './navigation.scss'



const Navigation = () => {

  // State til at håndtere om menuen skal vises/skjules på MOBIL!
  const [ showBurgerMenu, setShowBurgerMenu ] = useState( false )

  return (

 

   
    <nav className='navbar'>


      

      <img className="logoFrontpage" src={ companyLogo }></img>

      <div className={ "navbar-links " + ( showBurgerMenu ? "active" : "" ) }>
        <ul>

          <li>
            <a href="#about">Om os</a>
          </li>
          <li>
            <a href="#tours">Produkter</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>

        </ul>

      </div>

      {/* change-klassen på burgermappen styrer kun animationen af burgeren - ikke andet */ }
      <span className={ "toggle-button " + ( showBurgerMenu ? "change" : "" ) } onClick={ () => setShowBurgerMenu( !showBurgerMenu ) }>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </span>

   
    </nav>
    
  )

}

export default Navigation
