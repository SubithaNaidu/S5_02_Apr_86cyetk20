import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "contacts";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  favorite: boolean;
}

interface ContactsState {
  contacts: Contact[];
}

// Load contacts from local storage when the app starts
const loadContacts = (): Contact[] => {
  const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedContacts ? JSON.parse(storedContacts) : [];
};

const saveContacts = (contacts: Contact[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
};

const initialState: ContactsState = {
  contacts: loadContacts(),
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      saveContacts(state.contacts);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      saveContacts(state.contacts);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      saveContacts(state.contacts);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload ? { ...contact, favorite: !contact.favorite } : contact
      );
      saveContacts(state.contacts);
    },
  },
});

export const { addContact, deleteContact, updateContact, toggleFavorite } = contactsSlice.actions;
export default contactsSlice.reducer;
