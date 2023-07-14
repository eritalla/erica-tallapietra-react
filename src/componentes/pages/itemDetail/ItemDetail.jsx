import { ItemCount } from "../../common/itemCount/ItemCount";

export const ItemDetail = ({ productSelected, cantidad, handleonAdd }) => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "rgb(196, 163, 227)",
        borderRadius: "10px",
        width: "30%",
        margin: "20px",
      }}
    >
      <h3>{productSelected.nombre}</h3>
      <img
        src={productSelected.img}
        alt=""
        style={{ width: "95%", boxShadow: 1 }}
      />
      <div>
        <p>{productSelected.descripcion}</p>
        <p>{productSelected.categoria}</p>
        <p>{productSelected.precio}</p>
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount
          stock={productSelected.stock}
          initial={cantidad}
          onAdd={handleonAdd}
        />
      ) : (
        <h3>No hay stock</h3>
      )}
    </div>
  );
};
