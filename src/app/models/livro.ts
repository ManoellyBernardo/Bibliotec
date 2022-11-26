import { Status } from "../status";

export interface Livro {
    id?: string;
    leitor: string;
    titulo: string;
    dataEmprestimo: Date;
    status: Status;
    capa: string;
    categoria: string;
    autor: string;
    isbn: string;
}
