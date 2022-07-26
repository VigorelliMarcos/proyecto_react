import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Item from "./componentes/Item/Item";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from "./componentes/Cart/Cart";
import CartProvider from "./contexts/CartContext";


function App() {
  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div style={{ backgroundColor: "red" }}>
                  {" "}
                  ERROR 404 NOT FOUND
                </div>
              }
              />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      
      </CartProvider>
    </>
  );
}

export default App;
