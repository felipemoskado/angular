import { Action } from '@ngrx/store';
import { SalvarColuna, TabelaModularActions, SelecionarColuna, DefinirColunasModulares } from './actions';
import { Coluna, ColunaModular } from './model';

export function colunasReducer(
    state: Array<Coluna> = [],
    action: Action
): Array<Coluna> {
    switch (action.type) {
        case TabelaModularActions.SALVAR_COLUNAS:
            return (action as SalvarColuna).payload;
        case TabelaModularActions.SELECIONAR_COLUNA:
            const indexColunaSelecionada = (action as SelecionarColuna).payload;

            return state.map((coluna, index) => {
                if (index === indexColunaSelecionada) {
                    return { ...coluna, ativa: !coluna.ativa };
                }
                return { ...coluna };
            });
        default:
            return state;
    }
}

export function colunasModularesReducer(
    state: Array<ColunaModular> = [],
    action: DefinirColunasModulares
): Array<ColunaModular> {
    switch (action.type) {
        case TabelaModularActions.DEFINIR_COLUNAS_TABELA:
            return action.payload;
        default:
            return state;
    }
}
