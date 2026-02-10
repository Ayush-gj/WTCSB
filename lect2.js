const user={
    name: "aj", age: 22,
    welcome: function () {
        console.log(`hello ${this.name}`);
        console.log(this)
    }
};

// const f=user.welcome;
// console.log(f())

user.welcome();
user.name="ajay";
user.welcome();