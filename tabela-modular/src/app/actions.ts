import { Action } from '@ngrx/store';
import { Coluna } from './model';

export enum TabelaModularActions {
    SALVAR_COLUNAS = '[Tabela Modular] Salvar colunas da tabela',
    SELECIONAR_COLUNA = '[Tabela Modular] Selecionar coluna'
}

export class SalvarColuna implements Action {
    type = TabelaModularActions.SALVAR_COLUNAS;
    constructor(public payload: Array<Coluna>) { }
}

export class SelecionarColuna implements Action {
    type = TabelaModularActions.SELECIONAR_COLUNA;
    constructor(public payload: number) { }
}
