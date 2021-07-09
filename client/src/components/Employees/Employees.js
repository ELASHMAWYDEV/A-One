import React, { useState , useEffect} from "react";

//Styles
import "./style.scss";

const Employees = ({employees, onChange}) => {
  const [employeeActiveId, setEmployeeActiveId] = useState(null);
 
  useEffect(() => {
    onChange(employeeActiveId);
  }, [employeeActiveId])
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
