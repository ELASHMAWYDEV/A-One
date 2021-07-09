import React, { useState , useEffect} from "react";

//Styles
import "./style.scss";

const Employees = ({employees, onChange = () => null, value}) => {
 
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
                value === employee._id ? "active" : ""
              }`}
              onClick={() => onChange(employee._id)}
            >
              {employee.name}
            </div>
          ))}
      </div>

    </div>
  );
};

export default Employees;
