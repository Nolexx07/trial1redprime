import { Link } from "react-router-dom";
import "./styles/Deletedonor.css";

function DonatePage() {
  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name1.value;
    const email = e.target.email.value;
    // Perform the delete action (e.g., make a request to a backend API)
    console.log("Delete Request Sent for:", { name, email });
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">RedPrime</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/donate" className="navbar-link">Back to Donate Page</Link>
          </li>
          <li>
            <Link to="/donor-registration" className="navbar-link">Register Donor</Link>
          </li>
          <li>
            <Link to="/donor-dashboard" className="navbar-link">Donor Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* Delete Donor Details Section */}
      <div className="donate-page">
        <div className="donate-wrapper">
          <h2>Delete Donor Details</h2>
          <form onSubmit={handleDelete}>
            <div className="input-box">
              <label htmlFor="name1">Donor Name</label>
              <input
                className="donate-input"
                type="text"
                name="name1"
                id="name1"
                placeholder="Enter donor name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                className="donate-input"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <button type="submit" className="donate-button">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DonatePage;
