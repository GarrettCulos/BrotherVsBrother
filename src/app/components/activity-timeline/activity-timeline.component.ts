import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { getActivitiesForUser } from '../../store/activities/activities.selector';
import { getPersons } from '../../store/person/person.selector';
import { Person, PersonWithActivities } from '../../models/person.type';

const secondsPerPixel = 1000 * 60 * 30;

@Component({
    selector: 'bvb-activity-timeline',
    templateUrl: './activity-timeline.component.html',
    styleUrls: ['./activity-timeline.component.scss']
})
export class ActivityTimelineComponent implements OnInit, OnDestroy {
    public people: PersonWithActivities[];
    public activities: any[];
    public activityFeedHeight = 0;
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.pipe(select(getPersons())).subscribe((people: any) => {
            this.people = people;
            this.people.forEach(person => {
                this.getPersonActivity(person);
            });
        });
    }

    getPersonActivity(person) {
        const currentDate = new Date().getTime();

        this.store.pipe(select(getActivitiesForUser(person.id))).subscribe((activities: any) => {
            let activityFeedHeight = 0;
            person.activities = activities.map(activity => {
                activity.start_date = new Date(activity.start_date);
                activity.windowPosition = (currentDate - activity.start_date.getTime()) / secondsPerPixel;
                activityFeedHeight = Math.max(activityFeedHeight, activity.windowPosition);
                return activity;
            });
            this.activityFeedHeight = Math.max(activityFeedHeight, 0);
        });
    }

    ngOnDestroy() {}
}
