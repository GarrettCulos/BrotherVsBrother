import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bvb-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
    public people = [
        {
            name: 'Garrett',
            totalDistance: 78,
            totalDistanceUnits: 'km',
            weeksDistance: 10,
            weeksDistanceUnits: 'km'
        },
        {
            name: 'Tony',
            totalDistance: 78,
            totalDistanceUnits: 'km',
            weeksDistance: 10,
            weeksDistanceUnits: 'km'
        }
    ];
}
