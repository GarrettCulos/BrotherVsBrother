// when the add pseron is called. Make api call to get person activities.
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, mergeMap } from 'rxjs/operators';

import * as UIActions from '../ui/ui.actions';
import * as PersonActions from './person.actions';
import * as ActivitiesActions from '../activities/activities.actions';
import { Observable, of } from 'rxjs';
import { StravaService } from '../../services/strava.service';

@Injectable()
export class PersonEffects {
    constructor(private actions$: Actions, private stravaService: StravaService) {}

    @Effect()
    getActions$: Observable<Action> = this.actions$.pipe(
        ofType(PersonActions.ADD_PERSON),
        mergeMap((action: PersonActions.AddPerson) =>
            this.stravaService.getActivities(action.person.name).pipe(
                mergeMap(activities => of(new ActivitiesActions.AddActivities(activities.body))),
                catchError(error => of(new UIActions.AddError(ActivitiesActions.ADD_ACTIVITIES, error)))
            )
        ),
        catchError(error => of(new UIActions.AddError(PersonActions.ADD_PERSON, error)))
    );
}
