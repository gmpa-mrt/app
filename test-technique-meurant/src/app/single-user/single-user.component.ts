import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.firstName = this.userService.getUserById(id).firstName;
    this.lastName = this.userService.getUserById(id).lastName;
    this.email = this.userService.getUserById(id).email;
  }
  onSubmit(form: NgForm): void{
    if (form.value.newFirstName !== ''){
      this.firstName = form.value.newFirstName;
    }
    if (form.value.newLastName !== ''){
      this.lastName = form.value.newLastName;
    }
    if (form.value.newEmail !== ''){
      this.email = form.value.newEmail;
    }

    const id = this.route.snapshot.params.id;

    const updateUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
    this.userService.updateUserToServer(updateUser, id);
  }
}
