import React from 'react';
import Navbar from './components/navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import Company_info from './components/Company_info';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className ='w-full  min-h-screen  text-white bg-zinc-900'>
      <Navbar />
      <Landingpage/>
      <Marquee />
      <Company_info/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App


