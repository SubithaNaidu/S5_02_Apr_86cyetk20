import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContacts } from '../hooks/useContacts';
import './ContactDetails.css'; 

const ContactDetails: React.FC = () => {
  const { id } = useParams();
  const { contacts, deleteContact } = useContacts();
  const contact = contacts.find(c => c.id.toString() === id);


  if (!contact) return <p>Contact not found</p>;

  return (
    <div className="contact-details-page">
      <h2>{contact.name}</h2>
      <div className="contact-info">
        <p><strong>Phone:</strong> 📞 {contact.phone}</p>
        <p><strong>Email:</strong> 📧 {contact.email}</p>
        <p><strong>Address:</strong> 🏠 {contact.address}</p>
      </div>

      <div className="action-buttons">
        <button className="btn-delete" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
        <Link to={`/edit/${contact.id}`} className="btn-edit">
          Edit
        </Link>
        <Link to="/" className="btn-back">
          Back to Contacts
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
