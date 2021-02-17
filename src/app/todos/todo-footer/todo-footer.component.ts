import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtroVarios, setFiltro } from '../filtro/filtro.actions';
import { eliminarCompletos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  contadorPendientes: number = 0;
  filtroActual?:filtroVarios;
  filtros:filtroVarios[] = ['Todos','Completados','Pendientes'];

  constructor( private store:Store<AppState>) {

    // this.store.select('filtro').subscribe((filtro)=>{
    //   this.filtroActual = filtro;
    // });
    this.store.subscribe((state)=>{
      this.filtroActual = state.filtro;
      this.contadorPendientes = state.todos.filter((todo) => !todo.completo).length;
    });
   }

  ngOnInit(): void {
  }

  aplicarFiltro(filtro:filtroVarios){
    this.store.dispatch( setFiltro({filtro: filtro}) );
  }

  limpiarCompletados(){
    this.store.dispatch( eliminarCompletos() );
  }

}
