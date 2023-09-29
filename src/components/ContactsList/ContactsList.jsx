import React from 'react';

import { deleteContact } from '../redux/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
 
    <ul >
      {contacts.map(contact => (
        <li  key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => handleDeleteContacts(contact.id)}>
            Sterge
          </button>
        </li>
      ))}
    </ul>
   
  );
}
