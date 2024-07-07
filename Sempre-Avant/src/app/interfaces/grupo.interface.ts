export interface Grupo {
    id: string | null;
    nombre: string | null;
    seccion: string | null;
}

export interface ApiResponseTest {
    grupos: Grupo[];
    lastPage: number;
}