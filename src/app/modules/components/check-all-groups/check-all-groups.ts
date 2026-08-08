import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { GroupListService } from '../../services/group-list.service';
import { GroupListFacade } from '../../store/group-list-store/group-list.facade';
import { Observable, of } from 'rxjs';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-check-all-groups',
  imports: [MatCheckbox, PushPipe],
  templateUrl: './check-all-groups.html',
  styleUrl: './check-all-groups.css'
})
export class CheckAllGroups {

  isAllGroupsCheked$!: Observable<boolean>;

  constructor(
    private groupListService: GroupListService,
    private groupListFacade: GroupListFacade
  ) {}

  ngOnInit(): void {
    this.isAllGroupsCheked$ = this.groupListFacade.isAllGroupsChecked$;
  }

  onChangeValue(checked: boolean) {
    if(checked) {
      this.groupListFacade.addAllGroups();
    } else {
      this.groupListFacade.clearAllGroups();
    }
  }
}
