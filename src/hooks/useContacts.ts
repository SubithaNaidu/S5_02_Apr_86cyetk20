import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { addContact, deleteContact, updateContact, toggleFavorite } from "../store/contactsSlice";

export const useContacts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return {
    contacts,
    addContact: (contact: any) => dispatch(addContact(contact)),
    deleteContact: (id: string) => dispatch(deleteContact(id)),
    updateContact: (contact: any) => dispatch(updateContact(contact)),
    toggleFavorite: (id: string) => dispatch(toggleFavorite(id)),
  };
};
