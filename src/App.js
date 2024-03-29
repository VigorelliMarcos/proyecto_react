import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./componentes/Cart/Cart";
import CartProvider from "./componentes/Cart/CartContext";



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
            <Route path="/category/placa/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/mother/item/:id" element={<ItemDetailContainer />} />            
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
