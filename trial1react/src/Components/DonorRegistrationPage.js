import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/DonorRegistrationPage.css";

function DonorRegistrationPage() {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [healthHistory, setHealthHistory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [tobaccoUse, setTobaccoUse] = useState("");
  const [drugUse, setDrugUse] = useState("");
  const [mentalHealth, setMentalHealth] = useState("");
  const [socialSupport, setSocialSupport] = useState("");
  const [financialSituation, setFinancialSituation] = useState("");
  const [riskAndBenefits, setRiskAndBenefits] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/register`, {name,bloodGroup, email, password, age,mobile,location,healthHistory,tobaccoUse,drugUse,mentalHealth,socialSupport,financialSituation,riskAndBenefits})
    .then(result => {console.log(result)
      navigate('/donor-dashboard')
    })
    .catch(err=> console.log(err))
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">RedPrime</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/donate" className="navbar-link">
              Back to Donate Page
            </Link>
          </li>
          <li>
            <Link to="/donor-dashboard" className="navbar-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Registration Form */}
      <div className="registration-container">
        <h1 className="registration-title">Donor Registration</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Blood Group:
            <select
              type="text"
              name="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
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
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Health History:
            <textarea
              name="healthHistory"
              value={healthHistory}
              onChange={(e) => setHealthHistory(e.target.value)}
            ></textarea>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword((prev) => !prev)}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20C7 20 2.73 16.11 1 12c.74-1.61 1.81-3.06 3.06-4.31M9.88 9.88A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .39-.08.76-.21 1.09" /><path d="M1 1l22 22" /></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                )}
              </span>
            </div>
          </label>

          {/* New Fields */}
          <label>
            Tobacco Use:
            <select
              name="tobaccoUse"
              value={tobaccoUse}
              onChange={(e) => setTobaccoUse(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            Drug Use:
            <select
              name="drugUse"
              value={drugUse}
              onChange={(e) => setDrugUse(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            Medical History (Upload File):
            <input
              type="file"
              name="medicalHistoryFile"
            />
          </label>

          <label>
            Mental Health (Describe any conditions):
            <textarea
              name="mentalHealth"
              value={mentalHealth}
              onChange={(e) => setMentalHealth(e.target.value)}
            ></textarea>
          </label>

          <label>
            Social Support:
            <select
              name="socialSupport"
              value={socialSupport}
              onChange={(e) => setSocialSupport(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="N/A">N/A</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            Financial Situation:
            <textarea
              name="financialSituation"
              value={financialSituation}
              onChange={(e) => setFinancialSituation(e.target.value)}
            ></textarea>
          </label>

          <label>
            Risk and Benefits (Optional):
            <textarea
              name="riskAndBenefits"
              value={riskAndBenefits}
              onChange={(e) => setRiskAndBenefits(e.target.value)}
            ></textarea>
          </label>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </>
  );
}

export default DonorRegistrationPage;