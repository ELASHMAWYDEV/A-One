import React, { useState, useEffect } from "react";


//Styles
import "./style.scss";

const Services = ({services, onChange, value}) => {
  



  return (
    <div className="services-container">
      <div className="title">
        <h3>اختر الخدمات</h3>
      </div>
      <div className="services">
        {services &&
          services.map((service, index) => (
            <div
              className={`service-button ${
                value.includes(service._id) ? "active" : ""
              }`}
              onClick={() => {
                value.includes(service._id)
                  ? onChange(
                      value.filter((s) => service._id !== s)
                    )
                  : onChange([...value, service._id]);
              }}
            >
              <div>{service.name}</div>
              {service.price} ج.م
            </div>
          ))}
      </div>

    </div>
  );
};

export default Services;
