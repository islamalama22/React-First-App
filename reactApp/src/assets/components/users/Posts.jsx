import React, { useState } from "react";
import { useEffect } from "react";

function Posts() {

  const [pizza, setPizza] = useState([]);
  const [error, setError] = useState(null);
  const getPizza = async () => {

    try {
      const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      const result = await response.json();
      //  the  data  from  api  is  obj  so  i  send  only the  array 
      setPizza(result.recipes);
    } catch (err) {
      setError(' there  is  errro  now  ')
    }
  }

  useEffect(() => { getPizza(); }, []);

  if (error) {
    return <h2> {error}</h2>
  }

  if (pizza.length == 0) {
    return <>
      <h2> waiting....</h2>
    </>
  }

  return (
    <>
      <div className="pizzas">
        <div className="container-fluid">
          <div className="row">
            <h2>pizza menus</h2>
            {pizza.map((item) => (
              <div className="col-md-4">
                <div className="pizza" key={item.recipe_id}>
                  <h2>{item.title}</h2>
                  <img src={item.image_url} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
