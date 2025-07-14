// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Loginpage";
import RegisterPage from "./Components/RegisterPage";
import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage";
import RequestPage from "./Components/RequestPage"; 
import DonatePage from "./Components/DonatePage";
import ContactPage from "./Components/ContactPage";
import Deletedonor from "./Components/Deletedonor";
import SearchPage from "./Components/SearchPage";
import ScanDonorsPage from "./Components/ScanDonorsPage";
import DonorDetailsPage from "./Components/DonorDetailsPage";
import DonorRegistrationPage from "./Components/DonorRegistrationPage";
import DonorDashboard from "./Components/DonorDashboard";
import RequestHistory from "./Components/RequestHistory";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/help" element={<ContactPage />} />
          <Route path="/delete" element={<Deletedonor />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/scan-donors" element={<ScanDonorsPage />} />
          <Route path="/donor-details" element={<DonorDetailsPage />} />
          <Route path="/donor-registration" element={<DonorRegistrationPage />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/request-history" element={<RequestHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;