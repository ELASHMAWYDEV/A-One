import React from "react";

//Styles
import "./style.scss";

//Assets

const TableRow = ({ index, employee, services, total, user, time }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{employee}</td>
      <td className="services">
        <ul>
            {services.map((service, index)=>(
                <li>{service}</li>
            ))}
        </ul>
      </td>
      <td className="total">{total} ج.م</td>
      <td>{user}</td>
      <td>{time}</td>
    </tr>
  );
};

export default TableRow;
