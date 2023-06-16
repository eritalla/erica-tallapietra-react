import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div>
        <h2 style={{ color: "white", margin: "5px, 10px" }}>{cantidad}</h2>
        <button
          style={{
            color: "white",
            backgroundColor: "#212121",
            padding: "15px",
          }}
          onClick={agregar}
        >
          +
        </button>
        <button
          style={{
            color: "white",
            backgroundColor: "#212121",
            padding: "15px",
          }}
          onClick={disminuir}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
          style={{
            color: "white",
            backgroundColor: "#212121",
            padding: "15px",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
