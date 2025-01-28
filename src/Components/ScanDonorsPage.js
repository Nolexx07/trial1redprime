import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./styles/ScanDonorsPage.css";

function ScanDonorsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bloodGroup = location.state?.bloodGroup || "Not Specified";

  const [scanning, setScanning] = useState(false);
  const [donorsFound, setDonorsFound] = useState([]);

  const handleScan = () => {
    setScanning(true);

    // Simulate API call to fetch nearby donors
    setTimeout(() => {
      const donors = [
        {
          id: "D001",
          name: "John Doe",
          bloodGroup,
          location: "1.2km away",
          mobile: "+1234567890",
          age: 29,
          healthHistory: "No known conditions",
          vitalSigns: "Normal",
          detailedInfo: {
            tobaccoUse: "None",
            drugUse: "None",
            medicalHistory: "No chronic illnesses",
            mentalHealth: "Stable",
            socialSupport: "Strong family support",
            financialSituation: "Stable",
            risksAndBenefits: "Low risks",
          },
        },
        {
          id: "D002",
          name: "Jane Smith",
          bloodGroup,
          location: "2.3km away",
          mobile: "+9876543210",
          age: 34,
          healthHistory: "Allergic to penicillin",
          vitalSigns: "Normal",
          detailedInfo: {
            tobaccoUse: "Occasional",
            drugUse: "None",
            medicalHistory: "Mild allergies",
            mentalHealth: "Stable",
            socialSupport: "Moderate",
            financialSituation: "Stable",
            risksAndBenefits: "Low risks",
          },
        },
        {
          id: "D003",
          name: "Sam Wilson",
          bloodGroup,
          location: "3.5km away",
          mobile: "+1122334455",
          age: 27,
          healthHistory: "History of asthma",
          vitalSigns: "Stable",
          detailedInfo: {
            tobaccoUse: "None",
            drugUse: "None",
            medicalHistory: "Asthma (under control)",
            mentalHealth: "Stable",
            socialSupport: "Strong family support",
            financialSituation: "Stable",
            risksAndBenefits: "Moderate risks",
          },
        },
      ];
      setDonorsFound(donors);
      setScanning(false);
    }, 3000);
  };

  const viewDetails = (donor) => {
    navigate("/donor-details", { state: { donor } });
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
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </li>
        </ul>
      </nav>

      <div className="scan-container">
      <h1 className="scan-title">Scan for Donors</h1>
      <p className="scan-subtitle">
        Searching for donors with blood group <strong>{bloodGroup}</strong>.
      </p>
      <button className="scan-button" onClick={handleScan} disabled={scanning}>
        {scanning ? "Scanning..." : "Find Nearby Donors"}
      </button>
      {donorsFound.length > 0 && (
        <div className="donor-list">
          <h2 className="donor-title">Nearby Donors Found:</h2>
          <ul>
            {donorsFound.map((donor) => (
              <li key={donor.id} className="donor-item">
                <p><strong>ID:</strong> {donor.id}</p>
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
                <p><strong>Location:</strong> {donor.location}</p>
                <p><strong>Mobile:</strong> {donor.mobile}</p>
                <p><strong>Age:</strong> {donor.age}</p>
                <p><strong>Health History:</strong> {donor.healthHistory}</p>
                <p><strong>Vital Signs:</strong> {donor.vitalSigns}</p>
                <div className="button-group">
                  <button
                    className="alert-button"
                    onClick={() => alert(`Alert sent to ${donor.name}!`)}
                  >
                    Send Alert
                  </button>
                  <button
                    className="details-button"
                    onClick={() => viewDetails(donor)}
                  >
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

export default ScanDonorsPage;
