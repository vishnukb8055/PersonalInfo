// src/pages/ServicePlans.jsx
import React, { useState } from 'react';
import '../styles/ServicePlans.css';

const plans = {
  prepaid: Array(12).fill('Prepaid Plan'),
  postpaid: Array(12).fill('Postpaid Plan'),
};

function ServicePlans() {
  const [activeTab, setActiveTab] = useState('prepaid');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="service-plans-container">
      <h1 className="heading">Service Plans</h1>
      <p>Select a service:</p>
      <div className="tabs">
        <button
          onClick={() => handleTabClick('prepaid')}
          className={`tab-button ${activeTab === 'prepaid' ? 'active' : ''}`}
        >
          Prepaid
        </button>
        <button
          onClick={() => handleTabClick('postpaid')}
          className={`tab-button ${activeTab === 'postpaid' ? 'active' : ''}`}
        >
          Postpaid
        </button>
      </div>
      <div className="tab-content">
        {plans[activeTab].length > 0 && (
          <div className="plans-grid">
            {plans[activeTab].map((plan, index) => (
              <div key={index} className="plan-card">
                {plan} {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicePlans;
