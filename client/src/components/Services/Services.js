import React, { useState } from "react";

//Styles
import "./style.scss";

const Services = () => {
  const [servicesActiveIds, setServicesActiveIds] = useState([]);
  const [services, setServices] = useState([
    {
      id: 1,
      name: "حلاقة دفن",
      price: "30 ج.م"
    },
    {
      id: 2,
      name: "قص شعر",
      price: "30 ج.م"
    },
    {
      id: 3,
      name: "استشوار",
      price: "30 ج.م"
    },
  ]);
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
            <div>

              {service.name}
            </div>
              {service.price}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
