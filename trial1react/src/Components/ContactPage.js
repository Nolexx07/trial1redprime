import { Link } from "react-router-dom";
import "./styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <div className="contact-navbar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_im6HqBTnUY5lSDO3zEYCaEyMTeMsGcZeFjq0_7AZsOyjlWpggkq3wp56RWoPhe2tbck&usqp=CAU"
            className="contact-logo"
            alt="Logo"
          />
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </div>
      </div>
      <div className="contact-main">
        <h1>Contact Our Team</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="mobile">Contact:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter your Mobile Number"
            required
            maxLength="10"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>

          <div className="contact-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
