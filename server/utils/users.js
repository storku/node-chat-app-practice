// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getDescription() {
//     return `My name is ${this.name}. I'm ${this.age}`;
//   }
// }
//
// const me = new Person('Chenyu', 26);
// console.log(me.getDescription());

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    const user = this.getUser(id);

    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user;
  }

  getUser(id) {
    const [user] = this.users.filter(user => user.id === id);
    return user;
  }

  getUserList(room) {
    const users = this.users.filter(user => user.room === room);
    const namesArray = users.map(user => user.name);

    return namesArray;
  }
}

module.exports = { Users };
