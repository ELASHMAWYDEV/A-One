import React, { useState, useEffect } from "react";

import { Box } from "../../components";

//Styles
import "./style.scss";

const Services = () => {
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [servicesActiveIds, setServicesActiveIds] = useState([]);
  const [services, setServices] = useState([
    {
      id: 1,
      name: "حلاقة دفن",
      price: 30,
    },
    {
      id: 2,
      name: "قص شعر",
      price: 30,
    },
    {
      id: 3,
      name: "استشوار",
      price: 30,
    },
  ]);

  useEffect(() => {
    let sum = 0;
    for (let serviceId of servicesActiveIds) {
      let service = services.find((item) => item.id === serviceId);
      sum += service.price;
    }
    console.log(sum);

    setTotal(sum);
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
      <div className="add-button">
        <button onClick={() => setVisible(true)}>اضافة</button>
      </div>
      <Box visible={visible} setVisible={setVisible} price={total} />
    </div>
  );
};

export default Services;
