import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContacts = (name, number) => {
    const { contacts } = this.state;

    const sameTypeContacts = contacts.filter(contact => contact.name === name);
    if (sameTypeContacts.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <Section title="Phonebook">
          <PhoneBookForm handleAddContacts={this.handleAddContacts} />
        </Section>

        <Section title="Contacts">
          <Filter
            handleChange={this.handleChange}
            filter={filter}
            contacts={contacts}
            deleteContact={this.deleteContact}
          />
          <Contacts
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export { App };
