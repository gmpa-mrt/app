import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class UserService {
  users = [];

  constructor(private httpClient: HttpClient) {
  }

  getUserFromServer(): void {
    this.httpClient.get<any[]>('http://localhost:4000/user')
      .subscribe(
        (response) => {
          // tslint:disable-next-line:prefer-for-of
          if (this.users.length === 0) {
            for (let i = 0; i < response.length; i++) {
              this.users.push(response[i]);
            }
          } else {
            window.location.reload();
          }
        },
        (error) => {
          console.log('Error get !' + error.message);
        }
      );
  }

  // tslint:disable-next-line:typedef
  getUserById(id: number) {
    return this.users.find((userObject) => {
      return userObject.id === id;
    });
  }

  saveUserToServer(user: object): void {
    this.httpClient.post('http://localhost:4000/user', user, {responseType: 'text'})
      .subscribe(
        () => {
          console.log('Sign Up Done !');
        },
        (error) => {
          console.log(`${error.message}`);
        }
      );
  }

  addUser(firstName: string, lastFirst: string, email: string): void {
    const userObject = {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    };
    userObject.firstName = firstName;
    userObject.lastName = lastFirst;
    userObject.email = email;
    if (this.users.length === 0) {
      userObject.id = 1;
      this.getUserFromServer();
    } else {
      userObject.id = this.users[(this.users.length - 1)].id + 1;
    }
    this.users.push(userObject);
    this.saveUserToServer(userObject);
  }

  updateUserToServer(user: object, id: number): void {
    this.httpClient.put(`http://localhost:4000/user/${id}`, user, {responseType: 'text'})
      .subscribe(
        () => {
          console.log('Update Done !');
        },
        (error) => {
          console.log(`${error.message}`);
        }
      );
  }
}

