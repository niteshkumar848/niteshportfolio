 import React from 'react'
 import "./App.css"

import Header from './Components/header/Header'
import Home from './Components/Home/Home'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services'
import Qualification from './Components/qualification/Qualification'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import ScrollUp from './Components/scrollUp/ScrollUp'
 function App() {
   return (
    <>
       <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
     <Qualification/>
     <Services/>
     <Contact/>
  
    </main>
    <Footer/>
    <ScrollUp/>
    </>
   )
 }
 
 export default App