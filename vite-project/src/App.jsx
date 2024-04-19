import './App.css'
import { useState } from 'react';

function App() {
  const [contador,setContador] = useState(0)
  function aumentar(){
    setContador(contador + 1)
  }
  function diminuir(){
    setContador(contador - 1)
  }
  function zerar(){
    setContador(0)
  }
 
  return (
    <>
    <h1>Contador</h1>
    <p>{contador}</p>
    <button onClick={aumentar}>Aumentar</button>
    <button onClick={diminuir} >Diminuir</button>
    <button onClick={zerar} >Zerar</button>
    </>
  )
}

export default App
