import React, { useState, useEffect } from "react";

import { DatePicker } from "@y0c/react-datepicker";
import { TableRow } from "./components";

//Styles
import "./style.scss";
import "@y0c/react-datepicker/assets/styles/calendar.scss";

//hooks
import useStatistics from "./hooks";

const Statistics = ({ employees }) => {
  const { getData } = useStatistics();
  const [statisticsData, setStatisticsData] = useState({});
  const [dateSelected, setDateSelected] = useState(formatDate(new Date()));
  const [employeeSelected, setEmployeeSelected] = useState("");

  useEffect(() => {
    (async () => {
      console.log(dateSelected);
      setStatisticsData(
        await getData({ day: dateSelected, employeeId: employeeSelected })
      );
    })();
  },[])

    useEffect(() => {
      console.log(statisticsData)
    },[statisticsData]);

  return (
    <div className="statistics-container">
      <div className="selection">
        <div className="select-item">
          <div>
            <label>اختر موظف</label>
          </div>
          <select onChange={(e) => setEmployeeSelected(e.target.value)}>
            <option value="">الكل</option>
            {statisticsData.employees && statisticsData.employees.map((employee, index) => (
              <option value={employee._id}>{employee.name}</option>
            ))}
          </select>
          <span></span>
        </div>
        <div>
          <div>
            <label>اختر اليوم</label>
          </div>
          <DatePicker
            initialDate={new Date().getTime()}
            onChange={(value) => {
              console.log(value);
              setDateSelected(formatDate(value));
            }}
            dateFormat="DD-MM-YYYY"
            value={dateSelected}
          />
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>الموظف</th>
              <th>الخدمات</th>
              <th>الإجمالي</th>
              <th>الكاشير</th>
              <th>الوقت</th>
            </tr>
          </thead>
          <tbody>
            {statisticsData.transactions &&
              statisticsData.transactions.map((message, index) => (
                <TableRow index={index} {...statisticsData.transactions} />
              ))}
          </tbody>
        </table>
      </div>
      <div className="export-button">
        <button>تصدير</button>
      </div>
    </div>
  );
}

const formatDate = (value) => {
  //Get the day string --> mm-dd-yyyy
  const date = new Date(Date.parse(value));
  return [
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    date.getFullYear(),
  ].join("-");
};

export default Statistics;
