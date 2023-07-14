import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();
  console.log(id);

  const cantidad = getTotalQuantityById(id);

  const handleonAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El producto se agregó correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ItemDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          handleonAdd={handleonAdd}
        />
      ) : (
        /* acá se puede poner un loader en lugar de h1*/
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
