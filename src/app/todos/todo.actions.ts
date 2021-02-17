import { createAction, props } from '@ngrx/store';

export const crear = createAction( '[TODO] Crear', props<{ texto:string }>() );
export const toggle = createAction( '[TODO] Toggle', 
        props<{ id:number }>()
);
export const editar = createAction( '[TODO] Editar', 
        props<{ id:number, texto:string }>()
);
export const eliminar = createAction( '[TODO] Borrar', 
        props<{ id:number}>()
);
export const cambiarTodos = createAction( '[TODO] Cambiar todos', 
        props<{ completo: boolean}>()
);
export const eliminarCompletos = createAction( '[TODO] Eliminar todos');