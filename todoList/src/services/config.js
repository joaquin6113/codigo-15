const baseUrl = "https://654030cc45bedb25bfc1b81f.mockapi.io/"

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
    const finalUrl = id ? `${url}/${id}` : url

    const response = await fetch(`${baseUrl}${finalUrl}`, {
        method,
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
}