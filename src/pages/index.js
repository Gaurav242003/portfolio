import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjfive, homeObjfour, homeObjone, homeObjthree, homeObjtwo } from '../components/InfoSection/data';
import Skills from '../components/SkillsSection';
import { objskill } from '../components/SkillsSection/data';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { social } from '../components/footer/data';

const Home = () => {

  const [isOpen,setIsOpen]= useState(false);

  const toggle=() =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
     <Sidebar isOpen={isOpen}  toggle={toggle} />
     <Navbar  toggle={toggle} />
     <HeroSection/>
     <InfoSection {...homeObjone} />
     <InfoSection {...homeObjtwo} />
     <InfoSection {...homeObjthree} />
     <InfoSection {...homeObjfour} />
     <InfoSection {...homeObjfive} />
     
     <Skills  {...objskill}/>
     <Contact />
     <Footer  {...social}/>
     
    </>
  )
}

export default Home