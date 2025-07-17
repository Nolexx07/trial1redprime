import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

function LoginPage() {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {email, password})
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
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
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
