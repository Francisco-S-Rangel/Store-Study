import { createReducer, on } from "@ngrx/store";
import { GroupListState } from "../../interfaces/group-list.interface";
import { groupListActions } from "./group-list.actions";

export const initialGroupListState: GroupListState = {
    quantity: 0,
    groups: []
}

export const groupListReducer = createReducer(
    initialGroupListState,
    on(groupListActions.addGroupList, (state, { quantity, groups }) => {
        return {
            ...state,
            quantity,
            groups
        };
    }),
    on(groupListActions.toggleGroupSelection, (state, { group, selected }) => (
    {
    ...state,
    groups: state.groups.map(groupState => {
      if (groupState.groupId !== group.groupId) return groupState;
      return {
        ...groupState,
        selected,
        items: groupState.items.map(item => ({ ...item, selected }))
      };
    })
  })),
  on(groupListActions.toggleItemSelection, (state, { groupId, itemId, selected }) => ({
    ...state,
    groups: state.groups.map(group => {
      if (group.groupId !== groupId) return group;

      const updatedItems = group.items.map(item =>
        item.itemId === itemId ? { ...item, selected } : item
      );

      // Calculates the new group status based on the items
      const allSelected = updatedItems.every(item => item.selected);

      return {
        ...group,
        selected: allSelected,
        // You can store an “indeterminate” flag in the component instead of the state
        items: updatedItems
      };
    })
  })),
  on(groupListActions.addAllGroups, (state) => {
    const newGroups = state.groups.map((group) => ({
      ...group,
      selected: true,
      items: group.items.map((item) => ({
        ...item,
        selected: true
      }))
    }));

    return {
      ...state,
      groups: newGroups
    } 
  }),
  on(groupListActions.clearAllGroups, (state) => {

    const newGroups = state.groups.map((group) => ({
      ...group,
      selected: false,
      items: group.items.map((item) => ({
        ...item,
        selected: false
      }))
    }));

    return {
      ...state,
      groups: newGroups
    }
  })
)