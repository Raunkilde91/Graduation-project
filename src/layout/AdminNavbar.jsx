import React from 'react'
import { NavLink } from 'react-router-dom'
import companyLogo from "../images/logo.png";

const AdminNavbar = () => {
  return (

    // Adminopret passer til stien i app.jsx - derfor vil denne blive vist i browser

    <nav>
      <img className="logo" src={ companyLogo }></img>
      <ul>
        
        <li><NavLink to="/admin">Admin HOME</NavLink></li>
        <li><NavLink to="/admin/adminnews">Admin News</NavLink></li>
        <li><NavLink to="/admin/adminopret">Admin Opret</NavLink></li>
        <li><NavLink to="/admin/admindelete">Admin Delete</NavLink></li>
        

      </ul>
    </nav>
  )
}

export default AdminNavbar