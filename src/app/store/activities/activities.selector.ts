import { AppState } from 'src/app/store';
import { Activity } from '../../models/activity.type';

export const getActivitiesForUser = (userId: string) => {
    return (state: AppState) => {
        return [...state.activities.activityByIds]
            .map(id => state.activities.activityHash[id])
            .filter(activity => activity.athlete.id == userId && displayActivityCriteria(activity))
            .sort((a: any, b: any) => b.start_date - a.start_date);
        // intentionally dont check equality of type (userId need to be number not string to match strava api)
    };
};

/**
 * Filter activity criteria in getActivityForUser sub (return only activities 4 months old)
 */
const displayActivityCriteria = (activity: Activity): boolean => {
    return activity.type === 'Run' && new Date(activity.start_date).getTime() > new Date().getTime() - 1000 * 60 * 60 * 24 * 7 * 4 * 3;
};
