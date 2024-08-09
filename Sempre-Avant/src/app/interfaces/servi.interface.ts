export interface User {
    id: string | null;
    group_id: string | null;
    name: string | null;
    edad: string | null;
    rol: string | null;
    password?: string|null;
}

export interface UserIdIncluded{
    id: string | null;
    group_id: string | null;
    name: string | null;
    edad: string | null;
    rol: string | null;
    password: string | null;
}

export interface Login {
    name: string | null;
    password: string | null;
}

export interface LoginResponse {
    user: User,
    token: string
}