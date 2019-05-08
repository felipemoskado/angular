import { Action } from '@ngrx/store';
import { SalvarColuna, TabelaModularActions, SelecionarColuna } from './actions';
import { Coluna } from './model';

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
