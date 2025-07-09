import React from "react";
import "./service.css";

export const Services = ({ data }) => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of logistics and shipping solutions tailored to meet diverse business and individual needs.
          </p>
        </div>

        <div className="services-grid">
          {data
            ? data.map((service, i) => (
                <div key={`${service.name}-${i}`} className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
