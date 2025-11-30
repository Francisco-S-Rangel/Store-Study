import { createAction, props } from "@ngrx/store";
import { GroupState } from "../interfaces/group-list.interface";

export const ADD_GROUP_LIST = "[Group List] Add Group List";
export const TOGGLE_GROUP_SELECTION = '[Group List] Toggle Group Selection';
export const TOGGLE_ITEM_SELECTION = '[Group List] Toggle Item Selection';
export const ADD_ALL_GROUPS = '[Group List] Add All Groups';
export const RESET_ALL_STATE = '[Group List] Reset All State';

export const groupListActions = {
  addGroupList: createAction(ADD_GROUP_LIST, props<{quantity: number, groups: GroupState[]}>()),
  toggleGroupSelection: createAction(TOGGLE_GROUP_SELECTION, props<{ groupId: number; selected: boolean }>()),
  toggleItemSelection: createAction(TOGGLE_ITEM_SELECTION,props<{ groupId: number; itemId: number; selected: boolean }>()),
  addAllGroups: createAction(ADD_ALL_GROUPS),
  resetAllState: createAction(RESET_ALL_STATE)
}