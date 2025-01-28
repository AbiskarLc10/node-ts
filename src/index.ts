// import { Email, User, CarModel, EmailClone, Str } from "./types";
// import emails from "./data/dummyemails.json";

import { AddEmailData, DeleteEmail } from "./actions/email-actions";



// const GetData = <Type extends User, key extends keyof Type>(
//   user: Type,
//   property: key
// ) => {
//   return user[property];
// };

// // console.log(
// //   GetData(
// //     {
// //       name: "Abiskar",
// //       email: "abinjr08@gmail.com",
// //       age: 31,
// //       password: "abiskar",
// //     },
// //     "password"
// //   )
// // );

// const findEmailData = (id: string): Email => {
//   const findEmail = emails.find((email) => email.emailId === id);

//   if (!findEmail) {
//     throw new Error(`Email with ID ${id} not found`);
//   }

//   return findEmail;
// };

// // console.log(findEmailData("2"));

// const CarObject: CarModel = {
//   id: 101,
//   name: "Ferrari",
//   getName(id) {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };

// // CarObject.setName("Ferrrrariiiii");
// // console.log(CarObject.getName(101));

// const email1: EmailClone = {
//   emailId: "",
//   threadId: "",
//   subject: "",
//   from: "",
//   to: [],
//   cc: [],
//   bcc: [],
//   body: "",
//   sentDate: "",
// };

// AddEmailData({
//   emailId: "21",
//   threadId: "121",
//   subject: "Meeting Reminder again",
//   from: "john.doe@example.com",
//   to: ["alice.smith@example.com", "bob.johnson@example.com"],
//   cc: ["carol.white@example.com"],
//   bcc: [],
//   body: "This is a reminder for the meeting scheduled tomorrow at 10 AM.",
//   sentDate: "2025-01-20T09:00:00Z",
// 
DeleteEmail("21")


