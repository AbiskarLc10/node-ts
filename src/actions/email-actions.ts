import fs from "node:fs/promises";
import path from "path";
import { Email } from "../types/types";

const readFileData = async (): Promise<Email[]> => {
  try {
    const fileData = await fs.readFile(
      path.resolve(__dirname, "../data/dummyemails.json"),
      {
        encoding: "utf-8",
      }
    );

    const parsedData: Email[] = JSON.parse(fileData);

    return parsedData;
  } catch (error) {
    throw error;
  }
};

export const AddEmailData = async (email: Email) => {
  try {
    const emails = await readFileData();

    if (!email) {
      throw new Error("Email data not provided");
    }

    const newFileData = emails.concat(email);

    await fs.writeFile(
      path.resolve(__dirname, "../data/dummyemails.json"),
      JSON.stringify(newFileData, null, 1)
    );

    console.log("Email added to file successfully");
  } catch (error) {
    console.log(error);
  }
};

export const DeleteEmail = async (id: Email["emailId"]) => {
  try {
    if (!id) {
      throw new Error("Please provide emailid to delete");
    }

    const emails = await readFileData();

    if (!emails) {
      throw new Error("No emails found to delete");
    }

    const emailToBeDeleted = emails.find(
      (email, index) => email.emailId === id
    );

    if (!emailToBeDeleted) {
      throw new Error("Email you are trying to delete doesnot exist");
    }

    const newEmailsData = emails.filter((email, index) => email.emailId != id);

    console.log(newEmailsData);
  } catch (error) {
    console.log(error);
  }
};
