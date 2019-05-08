import { Component, OnInit } from '@angular/core';

import { Pessoa, Coluna } from './model';
import { Store } from '@ngrx/store';
import { SalvarColuna, SelecionarColuna } from './actions';
import { Observable } from 'rxjs';
import { selectorColunas, selectorColunasAtivas } from './selectors';

const ELEMENT_DATA: Array<Pessoa> = [
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' },
  { nome: 'Felipe', sobrenome: 'Moskado', idade: 23, cpf: '111111111', rg: '2222222' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'tabela-modular';

  colunasExibidas$: Observable<Array<string>>;
  colunas$: Observable<Array<Coluna>>;

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
    this.colunasExibidas$ = this.store.select(selectorColunasAtivas);
    this.colunas$ = this.store.select(selectorColunas);
  }

  selecionarColuna(coluna: Coluna, index: number, event: MouseEvent) {
    this.store.dispatch(new SelecionarColuna(index));
    event.stopPropagation();
  }
}
