export interface GroupListState {
    quantity: number;
    groups: GroupState[]
}

export interface GroupState {
    groupId: number,
    name: string,
    items: ItemState[],
    selected?: boolean
}

export interface ItemState {
    itemId: number,
    name: string,
    selected?: boolean
}