import { useState } from "react";
import Navbar from "./assets/components/navbar/Navbar.jsx";
import Users from "./assets/components/users/users.jsx";

function App() {
  const [users, setUsers] = useState([
    { "id": 1, "name": "islam", "email": "islamalam22@gmail.com" },
    { "id": 2, "name": "alama", "email": "imalam22@gmail.com" },
    { "id": 3, "name": "alla", "email": "joodmalam22@gmail.com" }
  ]);

  return <>
    <section className="users">
      <div className="container">
        <div className="row">

          {users.map((user) =>
            <Users id={user.id} name={user.name} email={user.email} />
          )}
        </div>
      </div>
    </section>
  </>
}


export default App;