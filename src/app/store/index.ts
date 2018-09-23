import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { UIState, uiInitialState, uiReducer } from './ui/ui.reducers';

export const appReducers: ActionReducerMap<any> = {
    ui: uiReducer
};

export const initialState = {
    ui: uiInitialState
};

export interface AppState {
    ui: UIState;
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
