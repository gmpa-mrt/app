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
}
