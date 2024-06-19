import Navbar from "./components/Navbar"

import { useEffect, useState } from "react"
 import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Notes from "./components/Notes"
import Interview from "./components/Interview"



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/resume" element={<Resume/>} /> 
        <Route path="/notes" element={<Notes/>} /> 
        <Route path="/interview" element={<Interview/>} /> 

        <Route path="*" element ={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
