import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProudects] = useState([]);
  const [error, setError] = useState(null);
  const getProudects = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      //  the  data  from  api  is  obj  so  i  send  only the  array
      setProudects(result.products);
      console.log(result.products);
    } catch (err) {
      setError(" there  is  errro  now  ");
    }
  };

  useEffect(() => {
    getProudects();
  }, []);

  if (error) {
    return <h2> {error}</h2>;
  }

  if (products.length == 0) {
    return (
      <>
        <h2> waiting....</h2>
      </>
    );
  }

  return (
    <>
      <div className="products">
        <div className="container-fluid">
          <div className="row">
            <h2>products </h2>
            {products.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="product">
                  <img src={item.thumbnail} className="w-100 "></img>
                  <h2>{item.title}</h2>
                  <Link to={"/ProductDetails"} className="btn btn-outline-dark">
                    {" "}
                    detalies
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
