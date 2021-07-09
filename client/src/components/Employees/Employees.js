import React, { useState } from "react";

//Styles
import "./style.scss";

const Employees = () => {
  const [employeeActiveId, setEmployeeActiveId] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "مؤمن",
    },
    {
      id: 2,
      name: "محمود",
    },
    {
      id: 3,
      name: "عمر",
    },
  ]);
  return (
    <div className="employees-container">
      <div className="title">
        <h3>اختر الموظف</h3>
      </div>
      <div className="employees">
        {employees &&
          employees.map((employee, index) => (
            <div
              className={`employee-button ${
                employeeActiveId === employee.id ? "active" : ""
              }`}
              onClick={() => setEmployeeActiveId(employee.id)}
            >
              {employee.name}
            </div>
          ))}
      </div>

    </div>
  );
};

export default Employees;
