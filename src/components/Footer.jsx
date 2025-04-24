import "../App.css";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer-text">© 2025 MC React. All Rights Reserved.</p>
      <p className="footer-contact">
        Email: <a href="mailto:yo@mc-react.com" className="footer-link">yo@mc-react.com</a> | Phone: +91 98765 43210
      </p>
      <div className="social-links">
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">GitHub</a>
      </div>
    </div>
  </footer>
);