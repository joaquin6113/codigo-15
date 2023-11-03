import { doHttpsRequest } from "./config"

export async function create(body, url) {
    return await doHttpsRequest({ url, body, method: "POST" })
}

export async function read(url) {
    return await doHttpsRequest({ url })
}

export async function update(id, body, url) {
    return await doHttpsRequest({ url, id, method: "PUT", body })
}

export async function destroy(id, url) {
    return await doHttpsRequest({ url, id, mehtod: "DELETE" })
}