import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h4 style={{ color: "azure", fontSize: "2.5em" }}>Maria Shoes</h4>
      <ul className="lista">
        <li>Todos</li>
        <li>Zapatillas</li>
        <li>Zapatos</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
