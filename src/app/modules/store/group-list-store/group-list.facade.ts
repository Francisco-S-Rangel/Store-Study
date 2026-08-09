import { Injectable } from "@angular/core";
import { GroupListState, GroupState, ItemState } from "../../interfaces/group-list.interface";
import * as groupListSelector from './group-list.selector';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GROUP_LIST } from "../../models/group-list.model";
import { groupListActions } from "./group-list.actions";

@Injectable({
    providedIn: 'root'
})
export class GroupListFacade {

    readonly groupList$: Observable<GroupListState>;
    readonly groups$: Observable<GroupState[]>;
    readonly itemsByGroup$: Observable<{ groupId: number, items: ItemState[]}[]>;
    readonly isAllGroupsChecked$: Observable<boolean>;

    constructor(private store: Store<{ groupListReducer: GroupListState }>) {
        this.groupList$ = this.store.select(groupListSelector.selectGroupListFeature);
        this.groups$ = this.store.select(groupListSelector.selectGroups);
        this.itemsByGroup$ = this.store.select(groupListSelector.selectItemsByGroup);
        this.isAllGroupsChecked$ = this.store.select(groupListSelector.isAllGroupsSelected);
    }

    addGroupListState(): void {
        this.store.dispatch(groupListActions.addGroupList(GROUP_LIST));
    }

    toggleGroupSelector(group: GroupState, selected: boolean): void {
        this.store.dispatch(
            groupListActions.toggleGroupSelection({ group, selected })
        );
    }

    toggleItemSelector(group: GroupState, itemId: number, selected: boolean): void {
        this.store.dispatch(
            groupListActions.toggleItemSelection({ groupId: group.groupId, itemId, selected })
        )
    }

    addAllGroups(): void {
        this.store.dispatch(groupListActions.addAllGroups())
    }

    clearAllGroups(): void {
        this.store.dispatch(groupListActions.clearAllGroups());
    }
}