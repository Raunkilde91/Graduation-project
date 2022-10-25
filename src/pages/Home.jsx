import React from 'react'

import Header from "../components/header/Header";
import Navigation from '../components/navigation/Navigation';
import Tours from "../components/tours/Tours";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <>

        <Header />
        <Navigation />
        <About />
        <Tours />
        <Contact />
        <Footer />
        

    </>
  )
  }

  

export default Home