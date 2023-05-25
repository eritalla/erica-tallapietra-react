import Counter from "../../common/counter/Counter";

export const ItemListContainer = ({ nombre, edad, greeting }) => {
  return (
    <div style={{ padding: "10px", backgroundColor: "pink" }}>
      <h1>Aca los productos</h1>
      <h3>Hola {nombre}</h3>
      <h4>mi edad es {edad}</h4>
      <h5>{greeting}</h5>
      <Counter />
    </div>
  );
};
