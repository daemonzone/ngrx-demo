import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import { DataService } from '../../main/services/data.service';
import * as featureActions from './actions';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect({})
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    tap(item => console.log(item)),
    map(item => ({ type: "bellazio!" }) )
    // startWith(new featureActions.LoadRequestAction()),
    /*
    switchMap(action =>
      this.dataService
        .getItems()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
          ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction({ error }))
          )
        )
    )
    */
  );
}
