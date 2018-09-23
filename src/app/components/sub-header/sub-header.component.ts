import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bvb-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
    public people = [
        {
            image: 'https://graph.facebook.com/10158699463730057/picture?height=256&width=256',
            name: 'Garrett',
            totalDistance: 131.5,
            totalDistanceUnits: 'km',
            weeksDistance: 23.4,
            weeksDistanceUnits: 'km'
        },
        {
            image: 'https://graph.facebook.com/10155703688449779/picture?height=256&width=256',
            name: 'Tony',
            totalDistance: 201.0,
            totalDistanceUnits: 'km',
            weeksDistance: 30.7,
            weeksDistanceUnits: 'km'
        }
    ];
}
