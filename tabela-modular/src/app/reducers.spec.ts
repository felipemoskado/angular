import { colunasReducer } from "./reducers";
import { SalvarColuna, SelecionarColuna } from './actions';

describe('Reducer - Tabela Modular', () => {

    describe('colunasReducer', () => {
        const colunas = [
            { nome: 'nome', ativa: true },
            { nome: 'sobrenome', ativa: false }
        ];

        it('Deve manter o estado quando receber uma ação desconhecida', () => {
            const state = colunasReducer([], { type: 'ACAO_DESCONHECIDA' });

            expect(state.length).toEqual(0);
        });

        it('Deve salvar as colunas quando receber a ação "SALVAR_COLUNAS"', () => {
            const state = colunasReducer([], new SalvarColuna(colunas));

            expect(state.length).toEqual(2);
            expect(state[0].nome).toEqual('nome');
            expect(state[0].ativa).toBeTruthy();
            expect(state[1].nome).toEqual('sobrenome');
            expect(state[1].ativa).toBeFalsy();
        });

        it('Deve alterar a coluna quando receber ação "SELECIONAR_COLUNA"', () => {
            const indexColunaSelecionada: number = 1;

            const state = colunasReducer(colunas, new SelecionarColuna(indexColunaSelecionada));

            expect(state.length).toEqual(2);
            expect(state[0].nome).toEqual('nome');
            expect(state[0].ativa).toBeTruthy();
            expect(state[1].nome).toEqual('sobrenome');
            expect(state[1].ativa).toBeTruthy();
        });
    });
});
