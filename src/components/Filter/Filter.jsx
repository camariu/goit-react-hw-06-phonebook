import { setFilter } from 'components/redux/filterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import style from "./Filter.module.css"

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={style.filter}>
      <input
        type="text"
        placeholder="Find contact"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
