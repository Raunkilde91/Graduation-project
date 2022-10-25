import React from 'react'
import companyLogo from "../../images/logo.png";
import heroimage from "../../images/headerimg.png";
import AiOutlineArrowDown from "@material-ui/icons/ArrowDownward"

//CSS
import "./header.scss"

const Header = () => {
  return (
    <header className="headerGrid">
      <img className="logo" src={ companyLogo } alt="companylogo" />


      <div className="heroImg">

        <h3 className='end'>Events</h3>
        <img className="heroimage" src={ heroimage } alt="heroimage" />
        <h3 className='start'>Travels</h3>

      </div>






      <a className="animatedArrow" href="#about"><AiOutlineArrowDown /></a>
    </header>

  )
}

export default Header