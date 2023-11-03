const baseUrl = "https://6544aea85a0b4b04436cba9b.mockapi.io/"

export async function doHttpsRequest({ url, id, body, method = "GET" }) {
    const endpoint = id ? `${url}/${id}` : url

    const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
}