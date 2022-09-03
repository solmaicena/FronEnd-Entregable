import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [totalElementos, setTotalElementos] = useState(0);

  function sumarElementos(){
    const suma = totalElementos + 1;
    setTotalElementos(suma)
  }
  //aca fa la funcion con estado que contabiliza cuantos elementos tiene el carrito (método para aumentar este númerométodo para aumentar este número METODO1)

  return (
    <div className="App">
      <Cabecera resultado={totalElementos}/>
      <Listado onSumar={sumarElementos}/>
    </div>
  );
}

export default App;
