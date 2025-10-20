import { GroupListState } from "../interfaces/group-list.interface";

export const GROUP_LIST: GroupListState = {
    quantity: 3,
    groups: [
        {
            groupId: 1,
            name: "Group test - BOX 01",
            items: [
                {
                    itemId: 10,
                    name: "BOX 01 - Product Test 01"
                }
            ]
        },
        {
            groupId: 2,
            name: "Group test - BOX 02",
            items: [
                {
                    itemId: 11,
                    name: "BOX 02 - Product Test 01"
                },
                {
                    itemId: 12,
                    name: "BOX 02 - Product Test 02"
                },
                {
                    itemId: 13,
                    name: "BOX 02 - Product Test 03"
                }
            ]
        },
        {
            groupId: 3,
            name: "Group test - BOX 03",
            items: [
                {
                    itemId: 14,
                    name: "BOX 03 - Product Test 01"
                },
                {
                    itemId: 15,
                    name: "BOX 03 - Product Test 02"
                },
                {
                    itemId: 16,
                    name: "BOX 03 - Product Test 03"
                },
                {
                    itemId: 17,
                    name: "BOX 03 - Product Test 04"
                },
                {
                    itemId: 18,
                    name: "BOX 03 - Product Test 05"
                }
            ]
        }
    ]
}