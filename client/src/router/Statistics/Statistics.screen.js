import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { DatePicker } from "@y0c/react-datepicker";
import { TableRow } from "./components";

//Styles
import "./style.scss";
import "@y0c/react-datepicker/assets/styles/calendar.scss";

//hooks
import useStatistics from "./hooks";

const Statistics = () => {
  const { getData } = useStatistics();
  const [statisticsData, setStatisticsData] = useState({});
  const [dateSelected, setDateSelected] = useState(formatDate(new Date()));
  const [employeeSelected, setEmployeeSelected] = useState("");
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    (async () => {
      setStatisticsData(
        await getData({ day: dateSelected, employeeId: employeeSelected })
      );
    })();
  }, [dateSelected, employeeSelected]);

  useEffect(() => {
    if (statisticsData.transactions) {
      setCsvData(
        statisticsData.transactions.map((item, index) => [
          index + 1,
          item.employee.name,
          item.services &&
            item.services.map(
              (service, index) =>
                service.name + "    " + service.price + "  ج.م\n"
            ),
          item.total,
          item.cashier.name,
          new Intl.DateTimeFormat("ar-EG", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }).format(Date.parse(item.time)),
        ])
      );
    }
  }, [statisticsData]);
  return (
    <div className="statistics-container">
      <div className="selection">
        <div className="select-item">
          <div>
            <label>اختر موظف</label>
          </div>
          <select
            onChange={async (e) => {
              setEmployeeSelected(e.target.value);
            }}
          >
            <option value="">الكل</option>
            {statisticsData.employees &&
              statisticsData.employees.map((employee, index) => (
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
            onChange={async (value) => {
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
              statisticsData.transactions.map((item, index) => (
                <TableRow index={index} {...item} />
              ))}
          </tbody>
        </table>
      </div>
      <div className="export-button">
        <CSVLink
          data={[
            ["#", "الموظف", "الخدمات", "الاجمالي", "الكاشير", "الوقت"],
            ...csvData,
          ]}
        >
          <button>تصدير</button>
        </CSVLink>
      </div>
    </div>
  );
};

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
