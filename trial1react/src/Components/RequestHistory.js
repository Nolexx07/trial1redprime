import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './styles/RequestHistory.css';

const RequestHistory = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetching request history data (this is just an example)
    const fetchRequests = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/requests`); // Use backend URL
      const data = await response.json();
      setRequests(data);
    };
    fetchRequests();
  }, []);

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
            <Link to="/request" className="navbar-link">
              Request Page
            </Link>
          </li>
        </ul>
      </nav>

      <div className="request-history-container">
      <div className="request-history-header">
        <h1>User Request History</h1>
      </div>
      <div className="request-history-list">
        {requests.length > 0 ? (
          requests.map((request, index) => (
            <div className="request-item" key={index}>
              <h2>{request.title}</h2>
              <p>{request.description}</p>
              <span className="request-date">{new Date(request.date).toLocaleDateString()}</span>
            </div>
          ))
        ) : (
          <p>No request history available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default RequestHistory;
