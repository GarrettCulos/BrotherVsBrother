import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

export const appReducers: ActionReducerMap<any> = {};

export const initialState = {};

export interface AppState {
    test: null;
}

export const appEffects: any[] = [];

export function logger(reducer: ActionReducer<AppState>): any {
    // default, no options
    return storeLogger({
        collapsed: true,
        level: 'log',
        filter: {}
    })(reducer);
}
