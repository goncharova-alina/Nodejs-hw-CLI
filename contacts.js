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

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(data);
    const contactById = parsedContacts.find(
      (contact) => contact.id === contactId
    );

    if (parsedContacts.length === 0) {
      return console.log(`No contacts`);
    }
    if (!contactById) {
      return console.log(`Contact with id: ${contactId} is not found`);
    }
    console.table(contactById);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  // addContact,
  // removeContact,
};
