import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as actions from "../todo.actions";
import { AppState } from '../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('textInputRef') txtInputRef!:ElementRef

  chkCompletado!: FormControl;
  inputText!:FormControl;

  editando:boolean = false;
  
  constructor(private store:Store<AppState>) { 
  }
  
  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo?.completo );
    this.inputText = new FormControl(this.todo?.nombre, Validators.required);

    this.chkCompletado.valueChanges.subscribe((e)=>{
      this.cambiarEstadoTarea();
    });
  }

  editar(){
    this.editando = true;
    this.inputText.setValue( this.todo.nombre );
    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    }, 1);
  }

  guardar(){
    this.editando = false;
    if( this.inputText.invalid ) return;
    if( this.inputText.value == this.todo.nombre ) return;

    if(this.todo?.id != undefined){
      this.store.dispatch( actions.editar({ id: this.todo.id, texto: this.inputText.value } ) );
    }
  }

  cambiarEstadoTarea(){
    if(this.todo?.id != undefined){
      this.store.dispatch( actions.toggle({ id: this.todo.id } ) );
    }
  }

  eliminar(){
    if(this.todo?.id != undefined){
      this.store.dispatch( actions.eliminar({ id: this.todo.id } ) );
    }
  }

}
