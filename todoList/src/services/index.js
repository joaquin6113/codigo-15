// Funciones para CRUD
const URLApi = "https://654030cc45bedb25bfc1b81f.mockapi.io/tasks"

export async function create(body) {
    const response = await fetch(URLApi, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()

    return data
}

export async function read() {
    const response = await fetch(URLApi)
    const data = await response.json()
    return data
}