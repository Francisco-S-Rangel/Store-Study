import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemState } from '../../interfaces/group-list.interface';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-item-list',
  imports: [MatCheckboxModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  @Input()
  items: ItemState[] = [];

  @Output()
  selectionChange = new EventEmitter<{ itemId: number; selected: boolean }>();

  updateItemList(item: ItemState, selected: boolean) {
    this.selectionChange.emit({ itemId: item.itemId, selected });
  }
}
