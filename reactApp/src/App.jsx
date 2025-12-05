import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar.jsx";
import Users from "./assets/components/users/Posts.jsx";
import Services from "./assets/components/services/Services.jsx";
import Contact from "./assets/components/contact/Contact.jsx";
import Home from "./assets/components/home/Home.jsx";
import About from "./assets/components/about/About.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Posts from "./assets/components/users/Posts.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>

     <Route path ="/" element={<Home/>}></Route>
     <Route path ="/contact" element={<Contact/>}></Route>
     <Route path ="/about" element={<About/>}></Route>
     <Route path ="/services" element={<Services/>}></Route>
    <Route path ="/posts" element={<Posts/>}></Route>

     <Route path ="/" element={<Home/>}></Route>



      </Routes>
      <Footer/>
    </>
  )
}


export default App;