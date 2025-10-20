import { createFeatureSelector } from "@ngrx/store";
import { GroupListState } from "../interfaces/group-list.interface";

export const groupListKey = 'groupListReducer';

export const selectGroupListFeature = createFeatureSelector<GroupListState>(groupListKey);