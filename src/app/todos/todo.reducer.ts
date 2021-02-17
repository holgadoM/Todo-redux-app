import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { cambiarTodos, crear, editar, eliminar, eliminarCompletos, toggle } from './todo.actions';

const initialState:Todo[] = [
    new Todo("Salvar"),
    new Todo("Correr"),
    new Todo("Comer"),
];

const _todoReducer = createReducer(
    initialState,
    on( crear , (state, {texto}) => [...state, new Todo( texto )] ),
    on( toggle , (state, {id}) =>{
      return state.map((todo)=>{
        if( todo.id === id ){
          return {
            ...todo,
            completo: !todo.completo
          }
        }else{
          return todo;
        }
      });
    }),

    on( editar , (state, {id, texto}) =>{
      return state.map((todo)=>{
        if( todo.id === id ){
          return {
            ...todo,
            nombre: texto
          }
        }else{
          return todo;
        }
      });
    }),
    on( eliminar , (state, {id}) =>{
      return state.filter( todo => todo.id !== id);
    }),
    on( cambiarTodos , (state, {completo}) =>{
      return state.map( (todo)=>{
        return {...todo, completo: completo  };
      });
    }),
    on( eliminarCompletos, (state)=> state.filter((todo)=> !todo.completo) )
  );
  
  export function todoReducer(state:any , action:Action) {
    return _todoReducer(state, action);
  }