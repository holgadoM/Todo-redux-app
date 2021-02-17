import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./models/todo.model";
import { filtroVarios } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reduce";
import { todoReducer } from "./todo.reducer";

export interface AppState{
    todos: Todo[],
    filtro: filtroVarios
    //usuario: {}
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer,
}