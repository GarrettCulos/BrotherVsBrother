import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person.type';

@Component({
    selector: 'bvb-activity-header',
    templateUrl: './activity-header.component.html',
    styleUrls: ['./activity-header.component.scss']
})
export class ActivityHeaderComponent implements OnInit {
    @Input()
    people: Person[];

    constructor() {}

    ngOnInit() {}
}
