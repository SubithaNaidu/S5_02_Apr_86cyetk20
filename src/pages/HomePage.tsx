import React, { useState } from "react";
import { useContacts } from "../hooks/useContacts";
import ContactCard from "../components/ContactCard";

const HomePage: React.FC = () => {
  const { contacts } = useContacts();
  const [search, setSearch] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Filter and sort contacts
  const filteredContacts = contacts
    .filter((contact) => {
      const matchesSearch = Object.values(contact).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(search.toLowerCase())
      );
      return showFavorites ? matchesSearch && contact.favorite : matchesSearch;
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort contacts alphabetically by name

  return (
    <div className="home-page">
      <div className="home-container">
        <h2 className="section-title">📞 My Contacts</h2>

        {/* Search Bar */}
        <input 
          type="text"
          placeholder="🔍 Search by name, phone, email..."
          value={search}
          onChange={handleSearch}
          className="search-bar"
          style={{ width: "50%", height: "30px", fontSize: "18px", padding: "10px" }}
        />

        {/* Toggle Favorites Button */}
        <button onClick={() => setShowFavorites(!showFavorites)} className="btn-toggle">
          {showFavorites ? "📋 Show All Contacts" : "⭐ Show Favorites"}
        </button>

        {/* Contact List */}
        <div className="contact-list">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          ) : (
            <p className="no-contacts">No contacts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
