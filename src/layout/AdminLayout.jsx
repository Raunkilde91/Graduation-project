import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

// CSS
import "../layout/adminlayout.scss";

const AdminLayout = (app) => {
  return (

    //  AdminNavbar er indsat, så denne vises i local/admin .... Outlet viser vej til inderholdet på siden.
    <>
    
    <AdminNavbar />

    <Outlet />
    
    </>
  )
}

export default AdminLayout