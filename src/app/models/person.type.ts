import { Activity } from './activity.type';

export class Person {
    id: string;
    image: string;
    name: string;
    totalDistance: number;
    weeksDistance: number;
    totalDistanceUnits: string;
    weeksDistanceUnits: string;
}

export class PersonWithActivities extends Person {
    activities: Activity[];
}
