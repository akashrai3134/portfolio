import './App.css'

import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills';
import Education from './components/Education'
import Footer from './components/Footer';
import ContactSection from './components/Experience/ContactSection';


  
function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <NavBar/>
      <HeroSection />
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <ContactSection/>
      
    </main>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
