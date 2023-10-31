import { useState } from "react"
import Swal from "sweetalert2"
import { create } from "../../services"

export default function FormTask({ getTasks }) {
    const [taskText, setTaskText] = useState("")

    const handleInputChange = (e) => setTaskText(e.target.value)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!taskText) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Completa el campo"
            })
            return
        }

        await create({
            text: taskText,
            status: "created"
        })

        setTaskText("")
        Swal.fire({
            title: "Succes",
            text: "Tarea añadida correctamente",
            icon: "success",
        })

        await getTasks()
    }
 
    return (
        <>
          <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
            <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
              <input 
              type="text" 
              value={taskText}
              onChange={handleInputChange}
              className="border w-full px-2 py-3 rounded-l outline-none" 
              placeholder="Nombre de la tarea"
              />
              <button className="bg-green-400 px-2 py-3 rounded-r text-white border border-green-400">Crear</button>
            </form>
        </>
    )
}