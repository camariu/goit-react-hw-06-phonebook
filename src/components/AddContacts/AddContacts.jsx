import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/phoneSlice';
import { nanoid } from 'nanoid';
import {  saveContactLocalStorage} from 'components/redux/phoneSlice';
import style from "./AddContacts.module.css"



export default function AddContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((state) =>state.phonebook.contacts)

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name && number) {
      dispatch(addContact({ name, number, id: nanoid() }));
      setName('');
      setNumber('');
    }
  };

  useEffect(() =>{
    saveContactLocalStorage(contacts)
  },[contacts])

  return (
    <div className={style.addContact}>
      <div className={style.addContactForm}>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input
        placeholder='Please insert your name'
          maxlength="10"
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          value={name}
          required
          onChange={handleNameChange}
        />
        <h4>Number phone</h4>
        <input
            placeholder='Please insert your number'
            maxlength="15"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          required
          onChange={handleNumberChange}
        />
       <button type="submit">Add Contact</button>
      </form>
      </div>
    </div>
  );
}
