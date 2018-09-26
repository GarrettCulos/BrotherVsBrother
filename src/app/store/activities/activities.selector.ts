import { AppState } from 'src/app/store';

export const getActivitiesForUser = (userId: string) => {
    return (state: AppState) => {
        return [...state.activities.activityByIds]
            .map(id => state.activities.activityHash[id])
            .filter(activity => activity.athlete.id == userId);
        // intentionally dont check equality of type (userId need to be number not string to match strava api)
    };
};
