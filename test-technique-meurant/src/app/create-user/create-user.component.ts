import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void{
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    this.userService.addUser(firstName, lastName, email);
  }
}
