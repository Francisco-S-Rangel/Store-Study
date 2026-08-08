import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GroupListState } from "../../interfaces/group-list.interface";

export const groupListKey = 'groupListReducer';
export const selectGroupListFeature = createFeatureSelector<GroupListState>(groupListKey);

export const selectGroups = createSelector(
    selectGroupListFeature,
    (state) => state.groups
);

export const selectItemsByGroup = createSelector(
    selectGroupListFeature,
    (state) => state.groups.map(group => ({ groupId: group.groupId, items: group.items }))
);

export const isAllGroupsSelected = createSelector(
    selectGroupListFeature,
    (state) => state.groups.every((group) => !!group.selected)
)