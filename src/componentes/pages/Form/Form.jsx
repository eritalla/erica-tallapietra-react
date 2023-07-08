import { AttractionsOutlined } from "@mui/icons-material";
import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: lastname,
    };
    console.log(data);
  };

  const handleName = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };
  const handleLastname = (e) => {
    setUserData({ ...userData, lastName: e.target.value });
  };
  return (
    <div>
      <h2>Este es el formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="apellido"
          onChange={handleLastname}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
