import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };
  return (
    <div>
      <h2>El total del carrito es : {total}</h2>
      <button onClick={limpiar}>Limpiar carrito</button>
      <Link to="/checkout">
        <button color="primary">Confirmar compra</button>
      </Link>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.nombre}</h2>
            <h3>{product.precio}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};
export default CartContainer;
