import { Action } from '@ngrx/store';

import * as uuid from 'uuid';
import * as UIActions from './ui.actions';

export interface UIState {
    loading: { [loadingId: string]: { type: string; data: any } };
    error: { [errorId: string]: { type: string; data: any } };
}

export const uiInitialState: UIState = {
    loading: {},
    error: {}
};

export function uiReducer(state: UIState = uiInitialState, action: Action) {
    switch (action.type) {
        case UIActions.ADD_ERROR:
            const addError = { ...state.error };
            addError[uuid.v4()] = { data: (<UIActions.AddError>action).data, type: (<UIActions.AddError>action).errorType };
            return { ...state, error: { ...addError } };

        case UIActions.ADD_LOADING:
            const loading = { ...state.loading };
            loading[uuid.v4()] = { data: (<UIActions.AddLoading>action).data, type: (<UIActions.AddError>action).errorType };
            return { ...state, loading: { ...loading } };

        case UIActions.REMOVE_ERROR:
            const removedError = { ...state.error };
            delete removedError[(<UIActions.RemoveError>action).id];
            return { ...state, error: { ...removedError } };

        case UIActions.REMOVE_LOADING:
            const removedLoading = { ...state.error };
            delete removedError[(<UIActions.RemoveError>action).id];
            return { ...state, error: { ...removedError } };

        default:
            return state;
    }
}
