// Date

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 17, 3);
// let myCreatedDate = new Date("2023-01-14"); // when we have specific syntax
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// Time Stamps

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Time here will be in milliseconds
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // converts ms->seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString('default', {
    weekday: "long",
});