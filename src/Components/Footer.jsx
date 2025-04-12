import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button className="back-to-top-floating" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      <footer className="footer">
        <div className="footer-content">
          {/* Footer Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><Link to="/shop/men">Men</Link></li>
                <li><Link to="/shop/women">Women</Link></li>
                <li><Link to="/shop/accessories">Accessories</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Pages</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Cart</h4>
              <ul>
                <li><Link to="/addcart">Add Cart</Link></li>
                <li><Link to="/editcart">Edit Cart</Link></li>
                <li><Link to="/deletecart">Delete Cart</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Account</h4>
              <ul>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-extra">
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaYoutube /></a>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <p>Stay updated with the latest offers & products</p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} FakeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
