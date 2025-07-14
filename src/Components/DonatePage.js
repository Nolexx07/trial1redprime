import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/DonatePage.css";

function DonorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    bloodgroup: "",
    email: "",
    mobile: "",
    location: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the URL below with your service endpoint
    fetch("https://your-service-url.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Registration Successful!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration Failed!");
      });
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
            <Link to="/service" className="navbar-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/delete" className="navbar-link">
              To Delete
            </Link>
          </li>
          <li>
            <Link to="/donor-dashboard" className="navbar-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Donor Registration Form */}
      <div className="donor-container">
        <div className="donor-main">
          <h1>Donate Blood Here</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Donor Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="bloodGroup">Select your blood group:</label>
            <select
              id="bloodGroup"
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Blood Group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobile">Contact:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              required
            />

            <label htmlFor="location">Select your location:</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Please select a location
              </option>
              <option value="Meerpet">Meerpet</option>
              <option value="Ameerpet">Ameerpet</option>
              {/* Add more locations as needed */}
            </select>

            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <button type="submit" className="donor-submit">
              Donate
            </button>
            <div className="donor-account">
              New Donation? <Link to="/donor-registration">Register Here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DonorRegistration;
