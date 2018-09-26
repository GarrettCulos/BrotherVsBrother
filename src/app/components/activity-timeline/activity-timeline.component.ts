import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { getActivitiesForUser } from '../../store/activities/activities.selector';

const secondsPerPixel = 1000 * 60 * 60;

@Component({
    selector: 'bvb-activity-timeline',
    templateUrl: './activity-timeline.component.html',
    styleUrls: ['./activity-timeline.component.scss']
})
export class ActivityTimelineComponent implements OnInit {
    public activities: any[];
    public activityFeedHeight = 0;
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        const currentDate = new Date().getTime();
        this.store.pipe(select(getActivitiesForUser('22146225'))).subscribe((activities: any) => {
            let activityFeedHeight = 0;
            this.activities = activities.map(activity => {
                activity.start_date = new Date(activity.start_date);
                activity.windowPosition = (currentDate - activity.start_date.getTime()) / secondsPerPixel;
                activityFeedHeight = Math.max(activityFeedHeight, activity.windowPosition);
                return activity;
            });
            this.activityFeedHeight = activityFeedHeight;
        });
    }
}
