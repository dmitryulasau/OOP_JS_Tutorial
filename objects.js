class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "logged OUT!");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

const userOne = new User("r@gmail.com", "Robert");
const userTwo = new User("m@gmail.com", "Mario");
const admin = new Admin("admin@gmail.com", "Bowser");

userOne.login().updateScore().updateScore().logout();

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);
