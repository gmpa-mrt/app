export class UserService {
  users = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Peter',
      email: 'jeanpeter@jp.com'
    },
    {
      id: 2,
      firstName: 'Laura',
      lastName: 'Klop',
      email: 'lauraklop@lk.com'
    },
    {
      id: 3,
      firstName: 'Hugo',
      lastName: 'Mople',
      email: 'hugomople@mp.com'
    }
  ];

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
}
