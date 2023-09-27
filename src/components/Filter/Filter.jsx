import React, { useState } from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux/es/hooks/useSelector';

export default function Filter({ onFilterChange }) {

    const[filter, setFilter] = useState('')

    const handleFilterChange = value => {
        setFilter(value);
      };
    
      const filteredContacts = contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  return (
    <div className={style.filter}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        onChange={event => onFilterChange(event.target.value)}
      ></input>
    </div>
  );
}
