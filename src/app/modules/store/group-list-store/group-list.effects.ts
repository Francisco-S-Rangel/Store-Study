import { GroupState } from './../../interfaces/group-list.interface';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { groupListActions } from "./group-list.actions";
import { tap } from "rxjs";
import { GroupListFacade } from "./group-list.facade";
import { concatLatestFrom } from '@ngrx/operators';

@Injectable({
    providedIn: "root"
})
export class GroupListEffects {
    private actions$ = inject(Actions);
    private groupListFacade = inject(GroupListFacade);

    logGroupSelected$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupListActions.toggleGroupSelection),
            tap(({ group, selected}) => {
                console.log(`Group Name: ${group.name} | Selected: ${selected}`);
            })
        ),
        { dispatch: false }
    )

    logSelectAllGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupListActions.addAllGroups),
            concatLatestFrom(() => this.groupListFacade.groups$),
            tap(([ _, groups]) => {
                console.log("SELECT ALL CHECKBOX")
                groups.forEach((group: GroupState) => {
                    console.log(`Group Name: ${group.name} | Selected: ${group.selected}`);
                });
            })
        ),
        { dispatch: false }
    )
}
