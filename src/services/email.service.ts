import { API_URL } from "../constants";

export interface EmailData {
    email: string;
    comentario: string;
    page: string;
}
export async function enviarEmail({ email, comentario, page }: EmailData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            comentario,
            page,
        }),
    });

    if (!response.ok) {
        throw new Error("Error al enviar el correo");
    }

    return response.json();
}
