import React from 'react';
import AddContacts from './AddContacts/AddContacts';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import style from "../App.module.css"

export default function App() {
 

  
  return (
    <div className={style.phoneBook}>
      <AddContacts></AddContacts>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </div>
  );
}
