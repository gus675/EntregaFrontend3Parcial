// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado"
import { useState } from "react";

function App() {

  const [cantP, setCantP] = useState(0)

  const sumar = () =>{
    setCantP(cantP +1)
  }

  return (
    <div className="App">
      <Cabecera cantProd= {cantP}/>
      <Listado sumar={sumar}/>
    </div>
  );
}

export default App;
