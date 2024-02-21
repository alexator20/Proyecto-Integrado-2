export interface User {
    grupo_perteneciente_id: string | null;
    nombre: string | null;
    edad: string | null;
    rol: string | null;
    password: string | null;
}

export interface Login {
    nombre: string | null;
    password: string | null;
}