import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaGlobe,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateJWT = (email) => {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(JSON.stringify({ email, exp: Date.now() + 86400000 }));
    const signature = btoa("fake-signature");
    return `${header}.${payload}.${signature}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, country, email, password, confirmPassword } = form;

    if (!fullName || !country || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const token = generateJWT(email);
    const userData = {
      fullName,
      country,
      email,
      token,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setError("");
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2><FaCheckCircle /> Create Account</h2>

        {error && <p className="error">{error}</p>}

        <div className="form-group">
          <FaUser />
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaGlobe />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaLock />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
