import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { GroupListService } from '../../services/group-list.service';
import { GroupListFacade } from '../../store/group-list.facade';
import { Observable, of } from 'rxjs';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-check-all-groups',
  imports: [MatCheckbox, PushPipe],
  templateUrl: './check-all-groups.html',
  styleUrl: './check-all-groups.css'
})
export class CheckAllGroups {

  readonly _isCheked$: Observable<boolean> = of(false);

  constructor(
    private groupListService: GroupListService,
    private grouplistFacade: GroupListFacade
  ) {}

  onChangeValue(checked: boolean) {
    if(checked) {
      this.grouplistFacade.addAllGroups();
    } else {
      this.grouplistFacade.resetAllState();
    }
  }
}
