import React, { useState } from "react";
import { useEffect } from "react";

function Posts() {
  // 4-  get data  and  rerender  it
  //  the data  type  i  wont  to  send  is   array  so  i  must  accept  only array
  const [products, setProducts] = useState([]);

  //2-  api  insistlize
  const getPosts = async () => {
    console.log("get  posts");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    //  5-  the  datat  from api  is  array  so  we  can  send  it  directly
    setProducts(result);
    console.log(result);
  };

  // 3- to  use  api  using  hooks(get data)
  useEffect(() => {
    getPosts();
  }, []);

  // 1- re render  for  data  but  there  is  no  data  at  the  first  time
  //  5-  rerender  its  happen  becouse  of usestate  to  draw  the  data
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product">
          <h2> {product.title}</h2>
          <p> {product.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
