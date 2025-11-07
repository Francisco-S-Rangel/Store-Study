import { Injectable } from "@angular/core";
import { GroupListState, GroupState, ItemState } from "../interfaces/group-list.interface";
import * as groupListSelector from './../store/group-list.selector';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { groupListActions } from "../store/group-list.actions";
import { GROUP_LIST } from "../const/group-list.const";

@Injectable({
    providedIn: 'root'
})
export class GroupListFacade {

    readonly groupList$: Observable<GroupListState>;
    readonly groups$: Observable<GroupState[]>;
    readonly itemsByGroup$: Observable<{ groupId: number, items: ItemState[]}[]>;

    constructor(private store: Store<{ groupListReducer: GroupListState }>) {
        this.groupList$ = this.store.select(groupListSelector.selectGroupListFeature);
        this.groups$ = this.store.select(groupListSelector.selectGroups);
        this.itemsByGroup$ = this.store.select(groupListSelector.selectItemsByGroup);
    }

    addGroupListState(): void {
        this.store.dispatch(groupListActions.addGroupList(GROUP_LIST));
    }

    toggleGroupSelector(group: GroupState, selected: boolean): void {
        this.store.dispatch(
            groupListActions.toggleGroupSelection({ groupId: group.groupId, selected })
        );
    }

    toggleItemSelector(group: GroupState, itemId: number, selected: boolean): void {
        this.store.dispatch(
            groupListActions.toggleItemSelection({ groupId: group.groupId, itemId, selected })
        )
    }
}