import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  firstName = 'none';
  lastName = 'none';
  email = 'none';

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.firstName = this.userService.getUserById(+id).firstName;
    this.lastName = this.userService.getUserById(+id).lastName;
    this.email = this.userService.getUserById(+id).email;
  }

}
