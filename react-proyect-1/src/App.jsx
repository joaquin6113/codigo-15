import { useState } from "react"
import { Counter, Footer, Header } from "./components"

export default function App() { 
  const [name, setName] = useState("")

  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre")
    setName(newName)
  }

  return (
    <>
      <Header />
      <h1 className="bg-custom-blue">Mi primer componente {name}</h1>
      <button onClick={changeName}>Cambiar Nombre</button>
      <hr />
      <Counter/>
      <Footer />
    </>
  )
}