import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar.jsx";
import Services from "./assets/components/services/Services.jsx";
import Contact from "./assets/components/contact/Contact.jsx";
import Home from "./assets/components/home/Home.jsx";
import About from "./assets/components/about/About.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Products from "./assets/components/Products/Products.jsx";
import ProductDetails from "./assets/components/products-detalis/ProductDetails.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>

     <Route path ="/" element={<Home/>}></Route>
     <Route path ="/contact" element={<Contact/>}></Route>
     <Route path ="/about" element={<About/>}></Route>
     <Route path ="/Services" element={<Services/>}></Route>
    <Route path ="/Products" element={<Products/>}></Route>
    <Route path ="/ProductDetails" element={<ProductDetails/>}></Route>



      </Routes>
      <Footer/>
    </>
  )
}


export default App;