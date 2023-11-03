import { useState } from "react"
import { useSelector } from "react-redux"
import { selectorUserId } from "../../selectors/userSelector"
import Swal from "sweetalert2"
import { create } from "../../services"
import TextField from "../TextField"
import { Button } from "../../components"

export default function FormTask({ getTasks }) {
    const [taskText, setTaskText] = useState("")

    const userId = useSelector(selectorUserId)

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

        await create(
            {
                text: taskText,
                status: "created",
                category: null,
                priority: null,
                user_id: userId
            }, 
            "tasks",
        )
        
        setTaskText("")

        Swal.fire({
           text: "Actualizado correctamente",
           icon: "success",
           title: "Success",
       })

        await getTasks()
    }
 
    return (
        <>
          <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
            <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
              <TextField 
              className={"rounded-l"} 
              value={taskText} 
              onChange={handleInputChange}/>
              <Button text={"Crear"} type="submit" variant="secondary" className={"rounded-r"}/>
            </form>
        </>
    )
}