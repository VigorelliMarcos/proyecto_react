import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  const title = "Titulo de tienda";
  return (
    <>
      <NavBar name={"Tienda"} />
      <ItemListContainer greeting={"¡Buenos Dias!"} />
    </>
    
  );
}

export default App;
