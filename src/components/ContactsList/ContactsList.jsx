import React from 'react';

import { deleteContact } from 'components/redux/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li>
          {contact.name} - {contact.number}
          <button onClick={() => handleDeleteContacts(contact.id)}>
            Sterge
          </button>
        </li>
      ))}
    </ul>
  );
}
