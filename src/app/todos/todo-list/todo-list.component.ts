import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtroVarios } from '../filtro/filtro.actions';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = [];
  filtroActual!:filtroVarios;

  constructor( private store:Store<AppState>) {
    // this.store.select('todos').subscribe((todos)=> this.todos = todos );
    this.store.subscribe(({todos, filtro})=>{
      this.todos = todos;
      this.filtroActual = filtro;
    });
   }

  ngOnInit(): void {
  }

}
