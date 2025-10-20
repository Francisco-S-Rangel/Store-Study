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

      // Calcula novo estado do grupo com base nos itens
      const allSelected = updatedItems.every(item => item.selected);
      const anySelected = updatedItems.some(item => item.selected);

      return {
        ...group,
        selected: allSelected,
        // você pode guardar um flag "indeterminate" no componente ao invés do estado
        items: updatedItems
      };
    })
  }))
)