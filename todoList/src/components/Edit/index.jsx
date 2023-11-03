import { useState } from "react"
import { PencilIcon } from "@heroicons/react/24/solid"
import { Dialog, } from "@headlessui/react"
import { Button, Select, TextField } from "./../../components"
import { update } from "../../services"
import Swal from "sweetalert2"

const categories = ["Hogar", "Trabajo", "Estudio", "Ocio"]
const priorities = ["Baja", "Media", "Alta", "Urgente"]

export default function Edit({ task, getTasks }) {
  const [open, setOpen] = useState(false)

  const [text, setText] = useState(task.text)
  const [category, setCategory] = useState(task.category ?? categories[0])
  const [priority, setPriority] = useState(task.priority ?? priorities[0])

  const handleChange = (e) => setText(e.target.value)

  const handleEditSubmit = async (e) => {
    e.preventDefault()

    await update(
    task.id, 
    {
      text,
      category,
      priority,
    },
    "tasks")

    Swal.fire({
      title:"Success",
      icon: "success",
      text: "Se actualizó correctamente",
    })
    
    setOpen(false)

    await getTasks()
  }
    return (
        <>
          <PencilIcon 
          className="h-6 w-6 text-blue-500 cursor-pointer"  
          onClick={() => setOpen(true)}
          />
          <Dialog 
          open={open} 
          onClose={() => setOpen(false)} 
          className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30"/>
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <Dialog.Panel className="bg-white mx-auto w-full md:max-w-md rounded p-4">
                <Dialog.Title>Editar tarea: {task.text}</Dialog.Title>
                <form className="my-5" onSubmit={handleEditSubmit}>
                  <TextField 
                  value={text} 
                  placeholder={"Editar tarea"}
                  className={"rounded-xl"}
                  onChange={handleChange}/>

                  <div className="mt-5">
                    <Select 
                    value={category} 
                    onChange={setCategory} 
                    items={categories}
                  />
                  </div>
                  <div className="mt-5">
                    <Select 
                    value={priority} 
                    onChange={setPriority} 
                    items={priorities}
                    />
                  </div>
                  <div className="mt-5">
                    <Button text="Actualizar" type="submit" className={"rounded w-full text-lg font-semibold"}/>
                  </div>
                </form>
              </Dialog.Panel>
            </div>
          </Dialog>
        </>
    )
}