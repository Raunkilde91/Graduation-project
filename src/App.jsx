import React from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AdminLayout from "./layout/AdminLayout";

// ADMIN

import './App.css';
import AdminHome from "./Admin/AdminHome";
import AdminDelete from "./Admin/AdminDelete";
import AdminOpret from "./Admin/AdminOpret";
import AdminRet from "./Admin/AdminRet";
import AdminNews from "./components/adminnews/AdminNews";

function App () {
  return (
    <div className="App-container">

      <Routes>

        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />


          <Route path="/admin" element={ <AdminLayout /> } >

            <Route index element={ <AdminHome /> } />
            <Route path="adminnews" element={ <AdminNews/> } />
            <Route path="admindelete" element={ <AdminDelete/> } />
            <Route path="adminopret" element={ <AdminOpret /> } />
            <Route path="/admin/tours/:id" element={ <AdminRet /> } />

          </Route>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
