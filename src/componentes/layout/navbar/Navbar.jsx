import CartWidget from "./Carrito";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dmn255lsq/image/upload/v1686836209/030ff58d-76bb-461f-8819-23474537b556_vowz8g.webp"
          alt=""
          style={{ height: "20px" }}
        />
      </Link>

      <div>
        <Link to={"/"}>Todas</Link>
        <Link to={"/categoria/zapatillas"}>Zapatillas</Link>
        <Link to={"/categoria/zapatos"}>Zapatos</Link>
      </div>

      <div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
