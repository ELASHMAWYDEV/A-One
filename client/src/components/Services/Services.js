import React, { useState, useEffect } from "react";


//Styles
import "./style.scss";

const Services = ({services, onChange}) => {
  const [servicesActiveIds, setServicesActiveIds] = useState([]);
  

  useEffect(() => {
    onChange(servicesActiveIds);
  }, [servicesActiveIds]);

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
                servicesActiveIds.includes(service.id) ? "active" : ""
              }`}
              onClick={() => {
                servicesActiveIds.includes(service.id)
                  ? setServicesActiveIds(
                      servicesActiveIds.filter((s) => service.id !== s)
                    )
                  : setServicesActiveIds([...servicesActiveIds, service.id]);
              }}
            >
              <div>{service.name}</div>
              {service.price}
            </div>
          ))}
      </div>

    </div>
  );
};

export default Services;
