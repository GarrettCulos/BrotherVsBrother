import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { UIState, uiInitialState, uiReducer } from './ui/ui.reducers';
import { personReducer, personInitialState, PersonState } from './person/person.reducers';
import { activitiesInitialState, activitiesReducer, ActivitiesState } from './activities/activities.reducers';
import { PersonEffects } from './person/person.effects';

export const appReducers: ActionReducerMap<any> = {
    ui: uiReducer,
    person: personReducer,
    activities: activitiesReducer
};

export const initialState = {
    ui: uiInitialState,
    person: personInitialState,
    activities: activitiesInitialState
};

export interface AppState {
    ui: UIState;
    person: PersonState;
    activities: ActivitiesState;
}

export const appEffects: any[] = [PersonEffects];

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger({
        collapsed: true,
        level: 'log'
    })(reducer);
}
