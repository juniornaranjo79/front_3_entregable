import { useState } from "react";
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera"


function App() {

  const [total, setTotal] = useState(0)

  const comprarItem = () => {
    setTotal( total + 1 )
  }
  return (
    <div className="App">
      <Cabecera total={total} />
      <Listado comprarItem={comprarItem} />
    </div>
  );
}

export default App;
