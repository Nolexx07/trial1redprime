import { useLocation, Link } from "react-router-dom";
import "./styles/DonorDetailsPage.css";

function DonorDetailsPage() {
  const location = useLocation();
  const donor = location.state?.donor;

  if (!donor) {
    return <div>No donor details available.</div>;
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
            <Link to="/service" className="navbar-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/scan-donors" className="navbar-link">
              Scan Donor
            </Link>
          </li>
        </ul>
      </nav>

      <div className="details-container">
      <h1 className="details-title">Donor Details</h1>
      <div className="details-card">
        <p><strong>ID:</strong> {donor.id}</p>
        <p><strong>Name:</strong> {donor.name}</p>
        <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
        <p><strong>Mobile:</strong> {donor.mobile}</p>
        <p><strong>Age:</strong> {donor.age}</p>
        <p><strong>Location:</strong> {donor.location}</p>
        <p><strong>Tobacco Use:</strong> {donor.detailedInfo.tobaccoUse}</p>
        <p><strong>Drug Use:</strong> {donor.detailedInfo.drugUse}</p>
        <p><strong>Medical History:</strong> {donor.detailedInfo.medicalHistory}</p>
        <p><strong>Mental Health:</strong> {donor.detailedInfo.mentalHealth}</p>
        <p><strong>Social Support:</strong> {donor.detailedInfo.socialSupport}</p>
        <p><strong>Financial Situation:</strong> {donor.detailedInfo.financialSituation}</p>
        <p><strong>Risks and Benefits:</strong> {donor.detailedInfo.risksAndBenefits}</p>
      </div>
    </div>
    </>

  );
}

export default DonorDetailsPage;
