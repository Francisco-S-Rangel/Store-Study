import { GROUP_LIST } from './../const/group-list.const';
import { groupListActions } from './../store/group-list.actions';
import * as fromGroupList from './../store/group-list.selector';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GroupListState, GroupState } from "../interfaces/group-list.interface";

@Injectable({
    providedIn: 'root'
})
export class GroupListService {

    constructor (private store: Store<{ groupListReducer: GroupListState }>) {
    }

    addGroupListState(): void {
        this.store.dispatch(groupListActions.addGroupList(GROUP_LIST));
    }

    selectGroupListState(): Observable<GroupListState> {
        return this.store.select(fromGroupList.selectGroupListFeature);
    }

    toggleGroupSelector(group: GroupState, selected: boolean): void {
        this.store.dispatch(
            groupListActions.toggleGroupSelection({ groupId: group.groupId, selected })
        );
    }

    toggleItemSelector(group: GroupState, itemId: number, selected: boolean): void{
        this.store.dispatch(
            groupListActions.toggleItemSelection({ groupId: group.groupId, itemId, selected })
        );
    }
}
