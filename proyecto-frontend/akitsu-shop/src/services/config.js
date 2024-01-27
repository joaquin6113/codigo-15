const baseUrl = "http://localhost:3002/api/v1/"

export async function doHttpsRequest({ url, id, body, method = "GET" }) {
    const endpoint = id ? `${url}/${id}` : url

    const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: {
            "Content-Type" : "application/json",
            // "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
}