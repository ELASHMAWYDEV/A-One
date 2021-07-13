import React, { useState, useEffect } from "react";

//Styles
import "./style.scss";

//hooks
import useHome from "./hooks";

//Assets
import { Employees, Services } from "../../components";
import { Box } from "../../components";

const Home = () => {
  const { getData, create } = useHome();
  const [homeData, setHomeData] = useState([]);
  const [servicesActiveIds, setServicesActiveIds] = useState([]);
  const [employeeActiveId, setEmployeeActiveId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let sum = 0;
    for (let serviceId of servicesActiveIds) {
      let service = homeData.services.find((item) => item._id === serviceId);
      sum += service.price;
    }

    setTotal(sum);
  }, [servicesActiveIds]);

  useEffect(() => {
    (async () => {
      setHomeData(await getData());
    })();
  }, []);

  return (
    <div className="home-container">
      <Employees
        employees={homeData.employees}
        value={employeeActiveId}
        onChange={(value) => {
          setEmployeeActiveId(value);
        }}
      />
      <div className="dash-line"></div>
      <Services
        services={homeData.services}
        value={servicesActiveIds}
        onChange={(values) => {
          setServicesActiveIds(values);
        }}
      />
      <div className="dash-line"></div>
      <div className="extra-service">
        <div>في حالة وجود خدمات اضافية</div>
        <div>
          <input
            type="text"
            placeholder="وصف الخدمة (اختياري)"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="السعر"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="add-button">
        <button onClick={() => setVisible(true)}>اضافة</button>
      </div>
      <Box
        visible={visible}
        setVisible={setVisible}
        price={total}
		editedName = {editedName}
		editedPrice = {editedPrice}
        onConfirm={async () => {
          if (
            await create({
              servicesIds: servicesActiveIds,
              employeeId: employeeActiveId,
			  extraServiceDescription: editedName,
			  extraServiceAmount: editedPrice
            })
          ) {
            setServicesActiveIds([]);
            setEmployeeActiveId(null);
			setEditedName("");
			setEditedPrice(0);
            setVisible(false);
          }
		  console.log(editedName)
        }}
      />
    </div>
  );
};

export default Home;
