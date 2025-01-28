export type User = {
  name: string;
  email: string;
  password: string;
  age: number;
};
interface TestField {
  sentDate: string; 
}
export interface Email extends TestField {
  emailId: string;
  threadId: string;
  subject: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  body: string;
}

export const emails: Email[] = [
  {
    emailId: "1",
    threadId: "101",
    subject: "Meeting Reminder",
    from: "john.doe@example.com",
    to: ["alice.smith@example.com", "bob.johnson@example.com"],
    cc: ["carol.white@example.com"],
    bcc: [],
    body: "This is a reminder for the meeting scheduled tomorrow at 10 AM.",
    sentDate: "2025-01-20T09:00:00Z",
  },
  {
    emailId: "2",
    threadId: "102",
    subject: "Project Update",
    from: "alice.smith@example.com",
    to: ["john.doe@example.com"],
    cc: [],
    bcc: [],
    body: "The project is progressing well. We are on track to meet the deadline.",
    sentDate: "2025-01-20T10:00:00Z",
  },
  {
    emailId: "3",
    threadId: "103",
    subject: "New Proposal for Q2",
    from: "bob.johnson@example.com",
    to: ["alice.smith@example.com"],
    cc: ["carol.white@example.com", "david.martin@example.com"],
    bcc: ["eva.lee@example.com"],
    body: "Please review the new proposal for Q2 and provide your feedback.",
    sentDate: "2025-01-21T11:00:00Z",
  },
  {
    emailId: "4",
    threadId: "104",
    subject: "Invoice for Services",
    from: "carol.white@example.com",
    to: ["john.doe@example.com"],
    cc: ["bob.johnson@example.com"],
    bcc: [],
    body: "Attached is the invoice for services rendered last month.",
    sentDate: "2025-01-21T12:00:00Z",
  },
  {
    emailId: "5",
    threadId: "105",
    subject: "Feedback on Website Design",
    from: "david.martin@example.com",
    to: ["alice.smith@example.com"],
    cc: ["john.doe@example.com"],
    bcc: [],
    body: "Here is the feedback on the new website design mockups.",
    sentDate: "2025-01-22T08:30:00Z",
  },
  {
    emailId: "6",
    threadId: "106",
    subject: "Quarterly Review Results",
    from: "eva.lee@example.com",
    to: ["john.doe@example.com", "bob.johnson@example.com"],
    cc: [],
    bcc: ["carol.white@example.com"],
    body: "The quarterly review results are available. Please take a look.",
    sentDate: "2025-01-22T10:00:00Z",
  },
  {
    emailId: "7",
    threadId: "107",
    subject: "Salary Update Notification",
    from: "john.doe@example.com",
    to: ["alice.smith@example.com"],
    cc: ["bob.johnson@example.com"],
    bcc: [],
    body: "Please be advised that your salary will be updated next month.",
    sentDate: "2025-01-23T14:00:00Z",
  },
  {
    emailId: "8",
    threadId: "108",
    subject: "Team Building Event",
    from: "alice.smith@example.com",
    to: ["bob.johnson@example.com", "carol.white@example.com"],
    cc: [],
    bcc: [],
    body: "The team-building event is scheduled for next week. Looking forward to it!",
    sentDate: "2025-01-23T15:00:00Z",
  },
  {
    emailId: "9",
    threadId: "109",
    subject: "Client Presentation Prep",
    from: "bob.johnson@example.com",
    to: ["john.doe@example.com", "eva.lee@example.com"],
    cc: [],
    bcc: [],
    body: "We need to prepare for the client presentation tomorrow. Let's meet at 9 AM.",
    sentDate: "2025-01-24T09:30:00Z",
  },
  {
    emailId: "10",
    threadId: "110",
    subject: "Important Security Update",
    from: "carol.white@example.com",
    to: ["alice.smith@example.com"],
    cc: ["bob.johnson@example.com"],
    bcc: [],
    body: "There has been an important security update. Please review it immediately.",
    sentDate: "2025-01-24T11:00:00Z",
  },
  {
    emailId: "11",
    threadId: "111",
    subject: "Vacation Request",
    from: "david.martin@example.com",
    to: ["alice.smith@example.com"],
    cc: [],
    bcc: [],
    body: "I would like to request vacation time from March 1st to March 5th.",
    sentDate: "2025-01-25T08:00:00Z",
  },
  {
    emailId: "12",
    threadId: "112",
    subject: "Budget Discussion",
    from: "eva.lee@example.com",
    to: ["bob.johnson@example.com"],
    cc: ["john.doe@example.com"],
    bcc: [],
    body: "Let's discuss the budget for the upcoming project at your earliest convenience.",
    sentDate: "2025-01-25T09:00:00Z",
  },
  {
    emailId: "13",
    threadId: "113",
    subject: "Code Review Request",
    from: "john.doe@example.com",
    to: ["bob.johnson@example.com"],
    cc: [],
    bcc: ["carol.white@example.com"],
    body: "Could you please review the latest code commit? Thanks!",
    sentDate: "2025-01-26T10:30:00Z",
  },
  {
    emailId: "14",
    threadId: "114",
    subject: "New Hire Announcement",
    from: "alice.smith@example.com",
    to: ["team@example.com"],
    cc: [],
    bcc: [],
    body: "We have a new hire joining the team next week. Let's all give a warm welcome!",
    sentDate: "2025-01-26T11:00:00Z",
  },
  {
    emailId: "15",
    threadId: "115",
    subject: "Sales Report Q4",
    from: "bob.johnson@example.com",
    to: ["alice.smith@example.com", "john.doe@example.com"],
    cc: ["carol.white@example.com"],
    bcc: [],
    body: "Here is the sales report for Q4. Please review and provide feedback.",
    sentDate: "2025-01-27T08:30:00Z",
  },
  {
    emailId: "16",
    threadId: "116",
    subject: "Workshop Details",
    from: "carol.white@example.com",
    to: ["bob.johnson@example.com"],
    cc: ["alice.smith@example.com"],
    bcc: [],
    body: "Details for the upcoming workshop are attached. Please confirm your availability.",
    sentDate: "2025-01-27T10:00:00Z",
  },
  {
    emailId: "17",
    threadId: "117",
    subject: "Website Launch Update",
    from: "david.martin@example.com",
    to: ["alice.smith@example.com", "bob.johnson@example.com"],
    cc: [],
    bcc: [],
    body: "The website launch has been pushed back by one week. Please inform the team.",
    sentDate: "2025-01-27T12:00:00Z",
  },
  {
    emailId: "18",
    threadId: "118",
    subject: "Holiday Schedule",
    from: "eva.lee@example.com",
    to: ["team@example.com"],
    cc: [],
    bcc: [],
    body: "The holiday schedule for next month has been finalized. Please review it.",
    sentDate: "2025-01-28T09:00:00Z",
  },
  {
    emailId: "19",
    threadId: "119",
    subject: "Customer Feedback",
    from: "john.doe@example.com",
    to: ["alice.smith@example.com"],
    cc: ["bob.johnson@example.com"],
    bcc: [],
    body: "Please find attached the customer feedback report.",
    sentDate: "2025-01-28T10:00:00Z",
  },
  {
    emailId: "20",
    threadId: "120",
    subject: "Team Lunch",
    from: "alice.smith@example.com",
    to: ["john.doe@example.com", "bob.johnson@example.com"],
    cc: [],
    bcc: [],
    body: "Let's arrange a team lunch for next Friday to celebrate our recent achievements.",
    sentDate: "2025-01-28T12:00:00Z",
  },
];


export type CarModel = {
    id: number;
    name: string;
    setName: (name: string) => void;
    getName: (id: number) => string;
}


type SetCarName = CarModel["setName"]

interface Book {
    name: string;
    page: number;
}

interface Dictionary extends Book {
    dictionaryType: "monolingual" | "bilingual";
}

export interface BookDetails<in T> {
    getdetails: (arg: T) => void;
}

export type EmailClone = typeof emails[number]


type Flatten<T> = T extends any[] ? T[number] : T

export type Str = Flatten<string>

