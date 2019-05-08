import { StoreModule, createSelector } from '@ngrx/store';
import { colunasReducer } from './reducers';
import { Coluna } from './model';

export const TabelaModularStateModule = StoreModule.forFeature('tabelaModular', {
    colunas: colunasReducer
});

export interface TabelaModularState {
    colunas: Array<Coluna>;
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