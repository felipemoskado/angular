import { StoreModule, createSelector } from '@ngrx/store';
import { colunasReducer, colunasModularesReducer } from './reducers';
import { Coluna, ColunaModular } from './model';

export const TabelaModularStateModule = StoreModule.forFeature('tabelaModular', {
    colunas: colunasReducer,
    colunasModulares: colunasModularesReducer
});

export interface TabelaModularState {
    colunas: Array<Coluna>;
    colunasModulares: Array<ColunaModular>;
}

export const selectTabelaModular = state => state.tabelaModular;

export const selectorColunas = createSelector(
    selectTabelaModular,
    (state: TabelaModularState) => state.colunas
);

export const selectorColunasAtivas = createSelector(
    selectTabelaModular,
    (state: TabelaModularState) => state.colunas.filter(coluna => coluna.ativa).map(coluna => coluna.nome)
);

export const selectorColunasModulares = createSelector(
    selectTabelaModular,
    (state: TabelaModularState) => state.colunasModulares
)
