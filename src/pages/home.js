import React from 'react'
// import { Link } from "react-router-dom";
import Team from '../components/Team';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Navbar from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';
import Himansu from '../components/Himanshu';

const Home = () => {
  return (
    <div className=''>

        <Navbar />  

        <Hero />

        {/* <Himansu /> */}


        <WhatWeDo />

        <Stats />

        <Team />

        <Footer />

    </div>
  )
}

export default Home
