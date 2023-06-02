import React from 'react';

const Filter = ({ filter, contacts, handleChange, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <ul>
        {filter === ''
          ? null
          : filteredContacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </>
  );
};

export default Filter;
