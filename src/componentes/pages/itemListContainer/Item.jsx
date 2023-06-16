import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, descripcion, img, stock }) => {
  return (
    <div
      style={{
        width: "260px",
        margin: "5px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div>
        <h2>{nombre}</h2>
        <img style={{ maxWidth: "95%" }} src={img} alt="" />
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
      </div>
      <div>
        <Link to={`/itemDetail/${id}`}>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Ver producto
          </button>
        </Link>
      </div>
    </div>
  );
};
