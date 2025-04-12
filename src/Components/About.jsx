import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span>FakeStore</span></h1>
        <p>Your trusted source for trend-forward fashion and unbeatable value.</p>
      </section>

      {/* Story Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Born in the digital age, FakeStore began with a simple idea — bring luxury and affordability together in one seamless platform. Today, we proudly serve thousands of customers daily with hand-picked collections and exclusive deals.
          </p>

          <h2>What We Stand For</h2>
          <ul className="core-values">
            <li>✅ Quality First</li>
            <li>✅ Customer-Centric Approach</li>
            <li>✅ Sustainable & Ethical Sourcing</li>
            <li>✅ Always On Trend</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2" alt="FakeStore Team" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>500K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>1M+</h3>
          <p>Products Sold</p>
        </div>
        <div className="stat-box">
          <h3>100+</h3>
          <p>Employees Worldwide</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Global Partners</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          To revolutionize the way the world shops — by delivering not just products, but experiences that inspire, empower, and connect people through style and innovation.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" />
            <h4>Alex Carter</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CMO" />
            <h4>Emily Rose</h4>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="CTO" />
            <h4>David Kim</h4>
            <p>Chief Tech Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
