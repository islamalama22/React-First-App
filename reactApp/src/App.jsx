import { useState } from "react";
import Navbar from "./assets/components/navbar/Navbar.jsx";


function App() {

  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  }
  return <>
    <Navbar />
    <h2>  age is {age} </h2>
    <button onClick={increaseAge}>  increase  the  age   </button>
  </>
}

export default App;