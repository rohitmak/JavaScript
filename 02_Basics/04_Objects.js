// Will use the constructor way of declaring object here;
// const tinderUser = new Object();
// const tinderUser = {};
// Everthing (Operations, executions, etc...) are same in above both declaration of objects on the difference is that the first one is 'Singleton' and second one is not (or we can non-singleton)

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam Altman";
tinderUser.isInOpenAI = false;

// console.log(tinderUser);

const regularUser = {
  email: "someone@123gmail.com",
  fullname: {
    userFullName: {
      firstName: "Sam",
      lastName: "Altman",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname?.userFullName.firstName); // Concept of optional chaining in case value/object doesn't exist; mostly used in API's where we need to check for requests

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "a", 4: "b" };

// const object3 = {object1, object2}; // same problem as was in array this will return object inside the object;
// const object3 = Object.assign(object1, object2); // Object.assign(target, source);
// const object3 = Object.assign({}, object1, object2); // the empty {} object is taken if there are more than 2 objects. so the empty will act as a target and other will be acting as a source that will be merged in empty one. and also this is optional.
const object3 = { ...object1, ...object2 }; // spread operator just like array; this is mostly used;

// console.log(object3);

// Database Info will be in the format give below

const users = [
  {
    id: 1,
    email: "one@1gmail.com",
  },
  {
    id: 1,
    email: "one@1gmail.com",
  },
  {
    id: 1,
    email: "one@1gmail.com",
  },
];

users[1].email; // this will access the email of 1st user in the database;

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this will print all the keys of tinderUser object; the main thing to observe here is that this will output the keys in an array format on which we can apply different operations and work just like arrays (loop, etc...)
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // used very less, all the key value pairs are tabulated in an array [[key, value], ..., ...]

// console.log(tinderUser.hasOwnProperty('isInOpenAI')); // true since it is in the object tinderUser
// console.log(tinderUser.hasOwnProperty('isInOpen')); // false since not ...