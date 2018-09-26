import { Activity } from '../../models/activity.type';

export const GET_ACTIVITIES = '[ activities ] get activities';
export const ADD_ACTIVITIES = '[ activities ] add activities';

export class AddActivities {
    type = ADD_ACTIVITIES;
    constructor(public activities: Activity[]) {}
}

export class GetActivities {
    type = GET_ACTIVITIES;
    constructor(public userId: string) {}
}
