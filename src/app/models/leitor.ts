import { Livro } from "./livro";

export interface Leitor {
    id?: string;
    leitor: string;
    email: string;
    dataEmprestimo: Date;
    telefone: string;
    status: string;
}
