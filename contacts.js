const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(data);

    if (parsedContacts.length === 0) {
      return console.log(`No contacts`);
    }
    console.table(parsedContacts);
  } catch (err) {
    console.log(err);
  }
};
