import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../../asyncMock";
import "./item.css";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.categoria === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return (
    <div className="listcontainer">
      <h1 style={{ color: "whitesmoke" }}>{greeting}</h1>
      <Box>
        <ItemList items={items} />
      </Box>
    </div>
  );
};
