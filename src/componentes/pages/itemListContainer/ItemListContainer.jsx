import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners/";
import "./item.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("categoria", "==", categoryName));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log("error"));
  }, [categoryName]);
  /*tec de rendering: if con return temprano
  if (items.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="listcontainer">
      <h1 style={{ color: "whitesmoke" }}>{greeting}</h1>
      <Box>
        <ItemList items={items} />
      </Box>
    </div>
  );
};
*/

  /*ternario*/
  return (
    <div className="listcontainer">
      {items.length > 0 ? (
        <div>
          <h1 style={{ color: "whitesmoke" }}>{greeting}</h1>
          <Box>
            <ItemList items={items} />
          </Box>
        </div>
      ) : (
        <ClockLoader color="#edece6" />
      )}
    </div>
  );
};

/*antes de firebase, el 1 useEffect
useEffect(() => {
  let productosFiltrados = products.filter(
    (product) => product.categoria === categoryName
  );

  const tarea = new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryName ? productosFiltrados : products);
    }, 2000);
  });
  tarea
    .then((respuesta) => setItems(respuesta))
    .catch((rechazo) => {
      console.log(rechazo);
    });
}, [categoryName]);

2 useEffect
 useEffect(() => {
    if (!categoryName) {
      let itemsCollection = collection(db, "products");
      getDocs(itemsCollection)
        .then((res) => {
          let products = res.docs.map((elemento) => {
            return {
              ...elemento.data(),
              id: elemento.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log("error"));
    } else {
      let itemsCollection = collection(db, "products");
      let q = query(itemsCollection, where("categoria", "==", categoryName));
      getDocs(q)
        .then((res) => {
          let products = res.docs.map((elemento) => {
            return {
              ...elemento.data(),
              id: elemento.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log("error"));
    }
  }, [categoryName]);
*/
