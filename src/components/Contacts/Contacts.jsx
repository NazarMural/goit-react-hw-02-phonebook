import React from 'react';

const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      {filter !== ''
        ? null
        : contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </li>
            );
          })}
    </ul>
  );
};

export default Contacts;
