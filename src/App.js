
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import CardCategory from './components/Card/CardCategory'

import React,{useState,useEffect} from 'react';

function App() {

  
  
 
  return (
    <>
    <NavBar/>
   <HeroSection/>
   <CardCategory category="top"header="Top Albums" ></CardCategory>
   <CardCategory category="new" header="New" ></CardCategory>
   </>
   
  );
}

export default App;
