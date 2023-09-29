import React from 'react';
import style from "./ContactList.module.css"
import  {MdDelete } from "react-icons/md"

import { deleteContact } from '../redux/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterdContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.contactList}>
      <ul>
        {filterdContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name} : {contact.number}</p>
           <MdDelete onClick={() => handleDeleteContacts(contact.id)} size='30px' color='#fff' className={style.deleteButon}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
