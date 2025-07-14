import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

function LoginPage() {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      }
      
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className="login-box">
      <div className="login-form-container">
        <h1>Welcome Back to RedPrime</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <strong>Email</strong>
          </label>
          <input type="email" 
          placeholder="Email" 
          required
          onChange={(e) => setEmail(e.target.value)} 
          />
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input type="password" 
          placeholder="Password" 
          required 
          onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
        <p className="login-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
