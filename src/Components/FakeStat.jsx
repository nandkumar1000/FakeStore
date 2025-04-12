import React, { useEffect, useState } from 'react';
import './FakStat.css';  

const FakStat = () => {
  const [counter, setCounter] = useState({
    sales: 0,
    customers: 0,
    awards: 0,
    products: 0,
    orders: 0,
    years: 0,
    countries: 0,
    teamMembers: 0,
  });

  useEffect(() => {
    // Simulate counting animation
    const countStats = () => {
      setCounter({
        sales: 5000,
        customers: 15000,
        awards: 25,
        products: 200,
        orders: 12000,
        years: 10,
        countries: 35,
        teamMembers: 120,
      });
    };

    countStats();
  }, []);

  return (
    <div className="fakstat-container">
      <div className="fakstat-heading">
        <h2>Our Achievements</h2>
        <p>We’ve been proud of these milestones in our journey!</p>
      </div>
      <div className="fakstat-stats">
        <div className="stat-item">
          <div className="stat-number">{counter.sales}</div>
          <p className="stat-label">Sales</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.customers}</div>
          <p className="stat-label">Customers Served</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.awards}</div>
          <p className="stat-label">Awards</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.products}</div>
          <p className="stat-label">Products</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.orders}</div>
          <p className="stat-label">Orders Completed</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.years}</div>
          <p className="stat-label">Years in Business</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.countries}</div>
          <p className="stat-label">Countries Served</p>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counter.teamMembers}</div>
          <p className="stat-label">Team Members</p>
        </div>
      </div>
    </div>
  );
};

export default FakStat;
