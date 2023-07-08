import { ItemListContainer } from "../componentes/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../componentes/pages/itemDetail/ItemDetailContainer";
import { CartContainer } from "../componentes/pages/CartContainer";
import { Form } from "../componentes/pages/Form/Form";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },

  {
    id: "categories",
    path: "/categoria/:categoryName",
    Element: ItemListContainer,
  }
  
  {
    id: "itemDetail",
    path:"/itemDetail/:id",
    Element: ItemDetailContainer,
  },

  {
    id: "cart",
    path:"/cart",
    Element: CartContainer 
    ,
  },

  {
    id: "form",
    path:"/form",
    Element: Form 
    ,
  },
];
