import React from "react";
import "./features.css";

export const Features = ({ data }) => {
  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="features-grid">
          {data
            ? data.map((item, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
