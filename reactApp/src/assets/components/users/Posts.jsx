import React, { useState } from "react";
import { useEffect } from "react";

function Posts() {

  const [pizza, setPizza] = useState([]);
  const getPizza = async () => {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const result = await response.json();
    //  the  data  from  api  is  obj  so  i  send  only the  array 
    setPizza(result.recipes);
  }



  useEffect(() => { getPizza(); }, []);


  if (pizza.length == 0) {
    return <>
      <h2> waiting....</h2>
    </>
  }
 return (
    <>
      <div className="pizzas">
        <h2>pizza menus</h2>
        {pizza.map((item) => (
          <div className="pizza" key={item.recipe_id}>
            <h2>{item.title}</h2>
            <img src={item.image_url} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
