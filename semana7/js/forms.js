const form = document.querySelector("#form-register")

/* Los formularios tienen un evento especial y único llamado
   onsubmit, tiene un parámetro llamado event */

form.onsubmit = function (event) {
    /* Existe una función que nos permite evitar que el navegador
       se recargue cuando se entrega el formulario */
    event.preventDefault()

    const inputs = document.querySelectorAll("input")

    const values= {}

    for (const input of inputs) {
        values[input.name] = input.value
    }

    // Guardar valores en un objeto y verificar si faltan
    const inputValues = Object.values(values)

    const validacion = inputValues.find((value) => !value)

    if (typeof validacion === "string") {
        alert("Complete todos los campos")
        return
    }
}