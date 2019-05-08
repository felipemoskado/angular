import { Action } from '@ngrx/store';
import { Coluna, ColunaModular } from './model';

export enum TabelaModularActions {
    SALVAR_COLUNAS = '[Tabela Modular] Salvar colunas da tabela',
    SELECIONAR_COLUNA = '[Tabela Modular] Selecionar coluna',
    DEFINIR_COLUNAS_TABELA = '[Tabela Modular] Definir as colunas da tabela'
}

export class SalvarColuna implements Action {
    type = TabelaModularActions.SALVAR_COLUNAS;
    constructor(public payload: Array<Coluna>) { }
}

export class SelecionarColuna implements Action {
    type = TabelaModularActions.SELECIONAR_COLUNA;
    constructor(public payload: number) { }
}

export class DefinirColunasModulares implements Action {
    type = TabelaModularActions.DEFINIR_COLUNAS_TABELA;
    constructor(public payload: Array<ColunaModular>) {}
}
