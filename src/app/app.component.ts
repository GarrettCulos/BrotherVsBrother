import { Component, OnInit } from '@angular/core';
import { StravaService } from './services/strava.service';

@Component({
    selector: 'bvb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public strava: StravaService) {}

    ngOnInit() {
        this.strava.getActivities('garrett').subscribe(activities => {
            console.log(activities.body);
        });
    }
}
