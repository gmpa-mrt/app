import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: any[];
  toggle = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.users;
  }
  onToggle(): boolean{
    return this.toggle = !this.toggle;
  }
  onFetch(): void {
    this.userService.getUserFromServer();
  }
}
