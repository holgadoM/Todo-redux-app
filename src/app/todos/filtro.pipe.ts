import { Pipe, PipeTransform } from '@angular/core';
import { filtroVarios } from './filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtroVarios): Todo[] {
    
    switch (filtro) {
      case 'Completados':
        return todos.filter((todo)=> todo.completo);
      case 'Pendientes':
        return todos.filter((todo)=> !todo.completo);
      default:
        return todos;
    }
  }

}
