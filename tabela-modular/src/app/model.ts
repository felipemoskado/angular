export interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    cpf: string;
    rg: string;
}

export interface Coluna {
    nome: string;
    isAtiva: boolean;
    isFixa: boolean;
}

export interface ColunaModular {
    id: string;
    descricao: string;
    value: (element: any) => any;
  }