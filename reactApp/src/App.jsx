import { useState } from "react";
import Navbar from "./assets/components/navbar/Navbar.jsx";


function App() {
  const [users, setUsers] = useState([ 
  { "id":1 , "name":"islam","email":"islamalam22@gmail.com" },
  { "id":2 , "name":"alama","email":"imalam22@gmail.com"},
  {"id":3 , "name":"alla","email":"joodmalam22@gmail.com" }
]);

  return <>
     <section className="users"> 
      <div className="container">
        <div className="row">

        {users.map(function(user)
        {
          return <div className="col-md-4">
                     <div className="user">
                      <h2>{user.id}</h2>
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                       </div>    
                </div>
        })}
        </div>
      </div>
     </section>
  </>
}

export default App;