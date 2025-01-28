import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./styles/RegisterPage.css";

function RegisterPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Contact, setContact] = useState()
    const [bloodgroup, setbloodgroup] = useState()
    const [gender, setgender] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name, email, password, Contact, bloodgroup, gender})
      .then(result => {console.log(result)
        navigate('/')
      })
      .catch(err=> console.log(err))
    }



  return (
    <div className="register-box">
      <div className="register-form-container">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit} action="regForm" method="post">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            id="name"
            type="text"
            name="name1"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="bloodGroup">
            <strong>Select your blood group:</strong>
          </label>
          <select id="bloodGroup" name="bloodgroup" required onChange={(e) => setbloodgroup(e.target.value)}>
            <option value="Select">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="mobile">
            <strong>Contact:</strong>
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter your Mobile Number"
            required
            maxLength="10"
            onChange={(e) => setContact(e.target.value)}
          />

          <label htmlFor="gender">
            <strong>Gender:</strong>
          </label>
          <select id="gender" name="gender" required onChange={(e) => setgender(e.target.value)}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="password">
            <strong>Password:</strong>
          </label>
          <input
            type="password"
            name="pass"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="register-submit">
            Register
          </button>

          <div className="register-link">
            Already have an account? <Link to="/">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
