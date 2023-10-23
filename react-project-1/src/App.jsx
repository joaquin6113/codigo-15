import { useState } from "react";
import { Header, Footer } from "./components";

export default function App() {
  const [name, setName] = useState("Joaquín");

  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre")
    setName(newName)
  }

  return (
    <>
    <Header/>
    <h1>Mi primer componente {name}</h1>
    <button onClick={changeName}>Cambiar nombre</button>
    <Footer/>
    </>
  );
}