import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()

export class UserService {
  users = [];

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getUserById(id: number){
    return this.users.find((userObject) => {
      return userObject.id === id;
    });
  }

  // tslint:disable-next-line:typedef
  addUser(firstName: string, lastFirst: string, email: string){
    const userObject = {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    };
    userObject.firstName = firstName;
    userObject.lastName = lastFirst;
    userObject.email = email;
    userObject.id = this.users[( this.users.length - 1 )].id + 1;
    this.users.push(userObject);
  }

  // tslint:disable-next-line:typedef
  saveUserToServer(){
    this.httpClient.post('http://localhost:4000/user', this.users)
      .subscribe(
        () => {
          console.log('Sign Up Done !');
        },
        (error) => {
          console.log(`Error during the registrement ${error.message}`);
        }
      );
  }

  // tslint:disable-next-line:typedef
  getUserFromServer(){
    this.httpClient.get<any[]>('http://localhost:4000/user')
      .subscribe(
        (response) => {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < response.length; i++ ){
            this.users.push(response[i]);
          }
        },
        (error) => {
          console.log('Error get !' + error.message);
        }
      );
  }

}

