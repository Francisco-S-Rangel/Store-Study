import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupListService } from './modules/services/group-list.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private groupListService: GroupListService) {
  }

  ngOnInit() {
    this.groupListService.addGroupListState();
  }
}
