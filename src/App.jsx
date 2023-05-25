import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  const [nombre, setNombre] = useState("Eri");
  let edad = 37;
  let greeting = "Bienvenidas";

  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} edad={edad} greeting={greeting} />
      <button onClick={() => setNombre("maria")}>Cambiar nombre</button>
    </div>
  );
};

export default App;
