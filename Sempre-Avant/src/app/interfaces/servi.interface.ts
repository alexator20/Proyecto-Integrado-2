export interface User {
    id: string | null;
    grupo_perteneciente_id: string | null;
    nombre: string | null;
    edad: string | null;
    rol: string | null;
    password: string | null;
}

export interface UserIdIncluded{
    id: string | null;
    grupo_perteneciente_id: string | null;
    nombre: string | null;
    edad: string | null;
    rol: string | null;
    password: string | null;
}

export interface ApiResponse {
    users: User[];
    lastPage: number;
}

export interface Login {
    nombre: string | null;
    password: string | null;
}