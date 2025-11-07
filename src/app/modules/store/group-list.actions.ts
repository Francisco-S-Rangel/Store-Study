
import { createAction, props } from "@ngrx/store";
import { GroupState } from "../interfaces/group-list.interface";

export const ADD_GROUP_LIST = "[Group List] AddGroupList";
export const TOGGLE_GROUP_SELECTION = '[Group List] ToggleGroupSelection';
export const TOGGLE_ITEM_SELECTION = '[Group List] ToggleItemSelection';

export const groupListActions = {
  addGroupList: createAction(ADD_GROUP_LIST, props<{quantity: number, groups: GroupState[]}>()),
  toggleGroupSelection: createAction(TOGGLE_GROUP_SELECTION, props<{ groupId: number; selected: boolean }>()),
  toggleItemSelection: createAction(TOGGLE_ITEM_SELECTION,props<{ groupId: number; itemId: number; selected: boolean }>())
}