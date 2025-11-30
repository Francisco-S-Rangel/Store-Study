import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupListService } from '../../services/group-list.service';
import { GroupListState } from '../../interfaces/group-list.interface';
import { Group } from '../group/group';
import { AsyncPipe } from '@angular/common';
import { GroupListFacade } from '../../store/group-list.facade';
import { CheckAllGroups } from '../check-all-groups/check-all-groups';

@Component({
  selector: 'app-group-list',
  imports: [Group, AsyncPipe, CheckAllGroups],
  templateUrl: './group-list.html',
  styleUrl: './group-list.css'
})
export class GroupList implements OnInit {

  groupList$!: Observable<GroupListState>;
  
  constructor(
    private groupListService: GroupListService,
    private groupListFacade: GroupListFacade
  ) {}

  ngOnInit() {
    // this.groupList$ = this.groupListService.selectGroupListState();
    this.groupList$ = this.groupListFacade.groupList$;
  }

}
