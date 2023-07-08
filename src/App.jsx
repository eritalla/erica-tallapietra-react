import { ItemListContainer } from "./componentes/pages/itemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./componentes/pages/itemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/layout/Layout";
import { CartContainer } from "./componentes/pages/cart/CartContainer";
import { Form } from "./componentes/pages/Form/Form";
import CartContextProvider from "./context/CartContext";
import CheckoutContainer from "./componentes/pages/checkout/CheckoutContainer";

function App() {
  let greeting = "Bienvenidas!";

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} sx={{ m: 2 }} />}
            />
            <Route
              path="/categoria/:categoryName"
              element={<ItemListContainer sx={{ m: 2 }} />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<Form />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>
          <Route
            path="*"
            element={
              <div
                style={{
                  margin: "20px",
                }}
              >
                <h1>error 404</h1>
                <h3>inexistente</h3>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

{
  /* <NavBar />
      <Box sx={{ padding: 2, bgcolor: "primary.light" }}>
        <Box sx={{ mb: 2, display: "flex" }}>
          <ItemListContainer greeting={greeting} sx={{ m: 2 }} />
        </Box>
        <ItemDetailContainer />
      </Box>
      <ProductDetailContainer /> */
}
