import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store';
import * as PersonActions from './store/person/person.actions';
import { Person } from './models/person.type';

@Component({
    selector: 'bvb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public garrettPerson = <Person>{
        id: '22146225',
        image: 'https://graph.facebook.com/10158699463730057/picture?height=256&width=256',
        name: 'garrett',
        totalDistance: 131.5,
        totalDistanceUnits: 'km',
        weeksDistance: 23.4,
        weeksDistanceUnits: 'km'
    };

    public tonyPerson = <Person>{
        id: '5801394',
        image: 'https://graph.facebook.com/10155703688449779/picture?height=256&width=256',
        name: 'tony',
        totalDistance: 201.0,
        totalDistanceUnits: 'km',
        weeksDistance: 30.7,
        weeksDistanceUnits: 'km'
    };
    constructor(private store: Store<AppState>) {
        this.store.dispatch(new PersonActions.AddPerson(this.tonyPerson));
        this.store.dispatch(new PersonActions.AddPerson(this.garrettPerson));
    }
}
