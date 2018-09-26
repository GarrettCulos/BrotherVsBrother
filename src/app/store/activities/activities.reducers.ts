import { Action } from '@ngrx/store';

import * as ActivitiesActions from './activities.actions';
import { Activity } from '../../models/activity.type';

export interface ActivitiesState {
    activityByIds: string[];
    activityHash: { [activityId: string]: Activity };
}

export const activitiesInitialState: ActivitiesState = {
    activityByIds: [],
    activityHash: {}
};

export function activitiesReducer(state: ActivitiesState = activitiesInitialState, action: Action) {
    switch (action.type) {
        case ActivitiesActions.ADD_ACTIVITIES: {
            const newActivities = (<ActivitiesActions.AddActivities>action).activities;
            const activityHash = JSON.parse(JSON.stringify(state.activityHash));
            const activityByIds = [...state.activityByIds];
            newActivities.forEach(activity => {
                activityHash[activity.id] = activity;
                activityByIds.push(activity.id);
            });
            return { ...state, activityHash, activityByIds };
        }
        default:
            return state;
    }
}
