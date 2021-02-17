import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cambiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completos:boolean = false;
  constructor( private store:Store ) { }

  ngOnInit(): void {
  }

  cambiarTodos(){
    this.completos = !this.completos;
    this.store.dispatch( cambiarTodos({completo: this.completos}) );
  }

}
