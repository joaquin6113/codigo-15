import { read } from "../services"
import Swal from "sweetalert2"

export async function findUser(field, value) {
    const { data } = await read("users")

    return data.find(
         (user) => user[field].toLowerCase() === value.toLowerCase()
      )
}

export function showError(text) {
    Swal.fire({
        icon: "error",
        text
      })
}

export async function showCurrentId(createdInput) {
    const { data } = await read("products")

    const idArray = data.map((element) => {
        if (element.name === createdInput[0].props.value) return element.id
    })

    const currentId = idArray.find((id) => id !== undefined)

    return data, currentId
}