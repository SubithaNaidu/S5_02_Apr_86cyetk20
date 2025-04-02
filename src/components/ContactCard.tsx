import React from "react";
import { useContacts } from "../hooks/useContacts";
import { Link } from "react-router-dom";

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    favorite: boolean;
  };
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { deleteContact, toggleFavorite } = useContacts();

  return (
    <div className="contact-card">
      <h3>
        {contact.name} {contact.favorite && "⭐"}
      </h3>
      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
      <button onClick={() => toggleFavorite(contact.id)}>
        {contact.favorite ? "Unfavorite" : "⭐"}
      </button>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
      <Link to={`/details/${contact.id}`}>View Details</Link>
     </div>
  );
};

export default ContactCard;
