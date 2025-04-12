import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Redirecting to Signup...");
      setTimeout(() => navigate("/signup"), 2000);
      return;
    }

    if (
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid credentials. Try again or sign up.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>
            <FaSignInAlt /> Welcome Back
          </h2>
          <p className="subheading">Login to continue exploring FakeStore</p>

          {error && <p className="error">{error}</p>}

          <div className="form-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>

        <div className="login-side-content">
          <h3>Why Join FakeStore?</h3>
          <ul>
            <li>✅ Get exclusive deals</li>
            <li>✅ Track your orders easily</li>
            <li>✅ Create your wishlist</li>
            <li>✅ Fast and secure checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
