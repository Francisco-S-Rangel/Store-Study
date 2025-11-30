import { createReducer, on } from "@ngrx/store";
import { GroupListState } from "../interfaces/group-list.interface";
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
    on(groupListActions.toggleGroupSelection, (state, { groupId, selected }) => ({
    ...state,
    groups: state.groups.map(group => {
      if (group.groupId !== groupId) return group;
      return {
        ...group,
        selected,
        items: group.items.map(item => ({ ...item, selected }))
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

    state.groups.forEach((group) => {
      group.selected = true;
      group.items.forEach((item) => {
        item.selected = true;
      })
    });

    return state;
  }),
  on(groupListActions.resetAllState, () => initialGroupListState)
)