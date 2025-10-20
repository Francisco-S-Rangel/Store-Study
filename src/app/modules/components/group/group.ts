import { Component, Input } from '@angular/core';
import { GroupState } from '../../interfaces/group-list.interface';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ItemList } from '../item-list/item-list';
import { GroupListService } from '../../services/group-list.service';

@Component({
  selector: 'app-group',
  imports: [MatCheckboxModule, ItemList],
  templateUrl: './group.html',
  styleUrl: './group.css'
})
export class Group {

  @Input()
  groups: GroupState[] = [];

  constructor(private groupListService: GroupListService) {
  }

  selectAllItems(group: GroupState, selected: boolean): void {
    this.groupListService.toggleGroupSelector(group, selected);
  }

  onItemSelectionChange(group: GroupState, itemId: number, selected: boolean): void{
    this.groupListService.toggleItemSelector( group, itemId, selected );
  }

  getCheckboxState(group: GroupState) {
    return {
      checked: group.items.every((item) => item.selected),
      inderterminate: group.items.some((item) => item.selected) && !group.items.every((item) => item.selected)
    };
  }

}
