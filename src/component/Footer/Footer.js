import React from 'react';
import './Footer.css'; // Custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3 col-sm-6">
            <h5>COMPANY</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Study Material Section */}
          <div className="col-md-3 col-sm-6">
            <h5>STUDY MATERIAL</h5>
            <ul className="list-unstyled">
              <li><a href="#">English Medium E-Notes</a></li>
              <li><a href="#">Hindi Medium E-Notes</a></li>
              <li><a href="#">Board Education Sample Paper</a></li>
              <li><a href="#">CBSE Previous Year Paper</a></li>
              <li><a href="#">Spoken English</a></li>
            </ul>
          </div>

          {/* Our Top Courses Section */}
          <div className="col-md-3 col-sm-6">
            <h5>OUR TOP COURSES</h5>
            <ul className="list-unstyled">
        
              <li><a href="#">Class 12th All Subjects</a></li>
              <li><a href="#">Class 11th All Subjects</a></li>
              <li><a href="#">Class 10th All Subjects</a></li>
              <li><a href="#">Class 9th All Subjects</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 col-sm-6">
            <h5>CONTACT</h5>
            <p>Address: Kankhbhar Latghat, Azamgarh Uttar Pradesh 275303</p>
            <p>Notes: <a href="tel:9807757865">9807757865</a></p>
            <p>Support: <a href="tel:9807757865">9807757865</a></p>
            <p>Email: <a href="mailto:haridevsingh00@gmail.com">haridevsingh00@gmail.com</a></p>
            <div className="social-links-container">
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/profile.php?id=100024528828843&mibextid=ZbWKwL"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
        />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/educationsystem91/" // Replace with your Instagram link
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
        />
      </a>
    </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 Board Education System | <a href="#">Home</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
