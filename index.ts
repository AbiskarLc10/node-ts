import { Email, User, emails, CarModel, EmailClone, Str } from "./types";

const GetData = <Type extends User, key extends keyof Type>(
  user: Type,
  property: key
) => {
  return user[property];
};

// console.log(
//   GetData(
//     {
//       name: "Abiskar",
//       email: "abinjr08@gmail.com",
//       age: 31,
//       password: "abiskar",
//     },
//     "password"
//   )
// );

const findEmailData = (id: string): Email => {
  const findEmail = emails.find((email) => email.emailId === id);

  if (!findEmail) {
    throw new Error(`Email with ID ${id} not found`);
  }

  return findEmail;
};

console.log(findEmailData("2"));

const CarObject: CarModel = {
  id: 101,
  name: "Ferrari",
  getName(id) {
    return  this.name;
  },
  setName(name) {
      this.name = name;
  },
};

CarObject.setName("Ferrrrariiiii")
console.log(CarObject.getName(101))


const email1: EmailClone = {
    emailId: "",
    threadId: "",
    subject: "",
    from: "",
    to: [],
    cc: [],
    bcc: [],
    body: "",
    sentDate: ""
}

