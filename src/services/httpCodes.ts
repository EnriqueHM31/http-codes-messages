export async function getHttpCodes() {
    const response = await fetch("http://localhost:3000/http-codes");

    if (!response.ok) {
        throw new Error("Error al obtener los códigos HTTP");
    }

    return response.json();
}


export async function getHttpCode(code: string) {
    const response = await fetch(`http://localhost:3000/http-codes/${code}`);

    if (!response.ok) {
        throw new Error("Error al obtener el código HTTP");
    }

    return response.json();
}