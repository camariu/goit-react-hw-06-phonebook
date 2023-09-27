import { createSlice } from '@reduxjs/toolkit'
 

// const inistialState = [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
// {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
// {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
// {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

const loadContactLocalStorage = () => {
  const storedContact = localStorage.getItem('contacts');
  return storedContact ? JSON.parse(storedContact) : [];
};

const saveContactLocalStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {contacts: [...loadContactLocalStorage()]},
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      saveContactLocalStorage(state.contacts);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      saveContactLocalStorage(state.contacts);
    },
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export default phonebookSlice.reducer;
export { loadContactLocalStorage, saveContactLocalStorage };
