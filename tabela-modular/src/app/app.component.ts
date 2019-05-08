import { Component } from '@angular/core';

import { Pessoa, Coluna, ColunaModular } from './model';
import { Store } from '@ngrx/store';
import { SalvarColuna, SelecionarColuna, DefinirColunasModulares } from './actions';
import { Observable } from 'rxjs';
import { selectorColunas, selectorColunasAtivas, selectorColunasModulares } from './selectors';

const ELEMENT_DATA: Array<Pessoa> = [
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' }
];

const colunasModulares: Array<ColunaModular> = [
  { id: 'nome', descricao: 'Nome', value: (element: Pessoa) => element.nome },
  { id: 'sobrenome', descricao: 'Sobrenome', value: (element: Pessoa) => element.sobrenome },
  { id: 'idade', descricao: 'Idade', value: (element: Pessoa) => element.idade },
  { id: 'cpf', descricao: 'Cpf', value: (element: Pessoa) => element.cpf },
  { id: 'rg', descricao: 'Rg', value: (element: Pessoa) => element.rg }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'tabela-modular';

  colunasExibidas$: Observable<Array<string>>;
  colunas$: Observable<Array<Coluna>>;
  colunasModulares$: Observable<Array<ColunaModular>>;

  displayedColumns: Array<Coluna> = [
    { nome: 'nome', ativa: true },
    { nome: 'sobrenome', ativa: true },
    { nome: 'idade', ativa: true },
    { nome: 'cpf', ativa: true },
    { nome: 'rg', ativa: true },
  ];

  dataSource = ELEMENT_DATA;

  constructor(private store: Store<any>) {
    this.store.dispatch(new SalvarColuna(this.displayedColumns));
    this.store.dispatch(new DefinirColunasModulares(colunasModulares));
    this.colunasExibidas$ = this.store.select(selectorColunasAtivas);
    this.colunas$ = this.store.select(selectorColunas);
    this.colunasModulares$ = this.store.select(selectorColunasModulares);
  }

  selecionarColuna(coluna: Coluna, index: number, event: MouseEvent) {
    this.store.dispatch(new SelecionarColuna(index));
    event.stopPropagation();
  }
}
