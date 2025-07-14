import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/RequestPage.css";

function RequestBlood() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    requiredDate: "",
    mobile: "",
    gender: "",
    location: "",
    units: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock service call
    console.log("Form submitted: ", formData);
    alert("Blood request submitted successfully!");
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
            <Link to="/request-history" className="navbar-link">
              Request History
            </Link>
          </li>
        </ul>
      </nav>
      {/*Request page form*/}
    <div className="request-container">
      <div className="request-main">
        <h1>Request Blood</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="bloodGroup">Select your blood group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose a blood group
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

          <label htmlFor="requiredDate">Required Date</label>
          <input
            type="date"
            id="requiredDate"
            name="requiredDate"
            value={formData.requiredDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobile">Contact</label>
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

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="location">Select your location</label>
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
            <option value="Sanathnagar">Sanathnagar</option>
            <option value="Khairatabad">Khairatabad</option>
            <option value="Musheerabad">Musheerabad</option>
            <option value="Amberpet">Amberpet</option>
            <option value="Nampally">Nampally</option>
            <option value="Secunderabad">Secunderabad</option>
            <option value="Gachibowli">Gachibowli</option>
            <option value="HITEC City">HITEC City</option>
          </select>

          <label htmlFor="units">Enter Blood Units</label>
          <input
            type="number"
            id="units"
            name="units"
            min="1"
            max="100"
            value={formData.units}
            onChange={handleChange}
            required
          />

          <button type="submit" className="request-button">
            Submit Request
          </button>
        </form>
        <div className="request-account">
          Already registered? <Link to="/search">Request</Link>
         
        </div>
      </div>
    </div>
    </>
    
  );
}

export default RequestBlood;
