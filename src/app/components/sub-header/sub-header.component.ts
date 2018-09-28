import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.type';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { getPersons } from '../../store/person/person.selector';

@Component({
    selector: 'bvb-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
    public people: Person[];

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.pipe(select(getPersons())).subscribe(people => {
            this.people = people;
        });
    }
}
