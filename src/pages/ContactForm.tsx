import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import { v4 as uuidv4 } from "uuid";

const ContactForm: React.FC = () => {
  const { id } = useParams(); // Get contact ID from URL
  const navigate = useNavigate();
  const { contacts, addContact, updateContact } = useContacts();

  // Find existing contact if ID is provided
  const existingContact = contacts.find((c) => c.id.toString() === id);

  // Set initial state: use existing contact data or default values
  const [contact, setContact] = useState(
    existingContact || {
      id: uuidv4(),
      name: "",
      phone: "",
      email: "",
      address: "",
      company: "",
      birthday: "",
      notes: "",
      favorite: false,
    }
  );

  useEffect(() => {
    if (existingContact) {
      setContact(existingContact); // Update state if editing
    }
  }, [existingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contact.name || !contact.phone || !contact.email || !contact.address) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    if (!/^\d{10}$/.test(contact.phone)) {
      alert("⚠️ Phone number must be exactly 10 digits!");
      return;
    }

    if (existingContact) {
      updateContact(contact); // Update existing contact
    } else {
      addContact(contact); // Add new contact
    }

    navigate("/");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
        {existingContact ? "Edit Contact" : "Add Contact"}
      
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
          <input type="text" placeholder="Phone (10 digits)" required value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
          <input type="email" placeholder="Email" required value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <input type="text" placeholder="Address" required value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })} />
          
          <button type="submit">{existingContact ? "Update Contact" : "Save Contact"}</button>
        </form>
        </h2>
    </div>
  );
};

export default ContactForm;
