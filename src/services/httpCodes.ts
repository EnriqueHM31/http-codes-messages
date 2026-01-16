export async function getHttpCodes() {
    const response = await fetch("http://localhost:3000/http-codes");

    if (!response.ok) {
        throw new Error("Error al obtener los códigos HTTP");
    }

    return response.json();
}