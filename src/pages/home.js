import React from 'react'
// import { Link } from "react-router-dom";
import Team from '../components/Team';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>

        <Navbar />  

        <Hero />

        <Stats />

        <Team />

        <Footer />

    </div>
  )
}

export default Home
