import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactDetails from "./pages/ContactDetails";
import ContactForm from "./pages/ContactForm";
import Header from "./components/Header"; // Import Header

function App() {
  return (
    <Router>
      <Header /> {/* Include Header at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactForm />} />  {/* Add Edit Route */}
        <Route path="/details/:id" element={<ContactDetails />} />
      </Routes>

    </Router>
  );
}

export default App;
