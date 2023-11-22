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

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this will print all the keys of tinderUser object; the main thing to observe here is that this will output the keys in an array format on which we can apply different operations and work just like arrays (loop, etc...)
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // used very less, all the key value pairs are tabulated in an array [[key, value], ..., ...]

// console.log(tinderUser.hasOwnProperty('isInOpenAI')); // true since it is in the object tinderUser
// console.log(tinderUser.hasOwnProperty('isInOpen')); // false since not ...

// Object De-Structureing and JSON API

const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructor: "Rohit"
}

// Now to print the values of the above object we can write them seperately like ↓
// course.courseInstructor; but there is a good way ↓

// const {courseInstructor} = course; // now we can only use 'courseInstructor' to access this property
const {courseInstructor: instructor} = course; // we can give value to the variable according to us.

// console.log(courseInstructor);
// console.log(instructor);

// This is called object destructuring; i.e; how we destructure the object according to our need.

// Now in react also we use this where instead of using 'props.company', etc we directly use {company} in the argument
// const navbar = (props.company) => {

// }
// const navbar = ({company}) => {

// }

// navbar(company = "BuildON");

// API (Application Programming Interface), getting our work done by other, eg: Restaurant Menu Card, Google Authentication
// API is how we write the values coming from backend; initially the values were in XML structure but nowadays they are in JSON (JavaScript Object Notation)

// JSON →
// {
//   "name": "rohit",
//   "coursename": "JS in Hindi",
//   "price": "Free"
// }

// JSON can be in the form
// [
//   {},
//   {},
//   {}
// ]