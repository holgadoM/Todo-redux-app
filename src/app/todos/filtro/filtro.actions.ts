import { createAction, props } from '@ngrx/store';

export type filtroVarios = 'Todos' | 'Completados' | 'Pendientes';

export const setFiltro = createAction( '[FILTRO] Set filtro', props<{ filtro: filtroVarios }>() );
