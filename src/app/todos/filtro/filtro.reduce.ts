import { Action, createReducer, on, State } from '@ngrx/store';
import {setFiltro, filtroVarios} from "./filtro.actions";

const initialState:filtroVarios = 'Todos';

const _filtroReducer = createReducer(
    initialState,
    on(setFiltro, (state:filtroVarios, { filtro })=> filtro ),

  );
  
  export function filtroReducer(state:any, action: Action) {
    return _filtroReducer(state, action);
  }
