import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
  
  const {id}=useParams();


  const [product,setProudect]=useState({});
  const getProductId=async()=>{

    const respons=await fetch(`${import.meta.env.VITE_BURL}/products/${id}`);
    console.log(import.meta.env.VITE_BURL);

    const result=await respons.json();
    setProudect(result);
    console.log(result);
  }

  useEffect(()=>{ getProductId();},[]);

  if(product.length==0){ return <h2> loading ...</h2>}

  return (
    <div>
      <h2> {product.title} </h2>
      <img src={product.thumbnail}></img>

    </div>
  )
}

export default ProductDetails;
