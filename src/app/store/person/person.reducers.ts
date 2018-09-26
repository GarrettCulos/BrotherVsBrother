import { Action } from '@ngrx/store';

import * as PersonActions from './person.actions';
import { Person } from '../../models/person.type';

export interface PersonState {
    personByIds: string[];
    personHash: { [personId: string]: Person };
}

export const personInitialState: PersonState = {
    personByIds: [],
    personHash: {}
};

export function personReducer(state: PersonState = personInitialState, action: Action) {
    switch (action.type) {
        case PersonActions.ADD_PERSON: {
            const thisAction = (<PersonActions.AddPerson>action).person;
            const personByIds = [...state.personByIds, thisAction.id];
            const personHash = JSON.parse(JSON.stringify(state.personHash));
            personHash[thisAction.id] = thisAction;
            return { ...state, personByIds, personHash };
        }
        default:
            return state;
    }
}
