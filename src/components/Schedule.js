import React, { useState } from "react";
import "../css/main.css";
import "../css/table.css";

const Schedule = () => {
  const schedule = {
    teacherName: "John Doe",
    teacherId: "1234",
    schedule: [
      {
        date: "2023-06-01",
        class: "Mathematics",
        time: "10:00 AM - 11.30 AM",
      },
      {
        date: "2023-06-01",
        class: "History",
        time: "12:00 AM - 1.30 AM",
      },
      {
        date: "2023-06-02",
        class: "Science",
        time: "09:00 AM - 11.30 AM",
      },
      {
        date: "2023-06-03",
        class: "English",
        time: "1:00 AM - 02.30 PM",
      },
    ],
  };

  const [date, setDate] = useState("");
  const [classschedule, setClassSchedule] = useState();

  const handleDate = (e) => {
    // console.log(e.target.value);
    setDate(e.target.value);
  };
  const handleSchedule = () => {
    let filtered = schedule.schedule.filter((item) => {
      return item.date === date;
    });

    console.log(date);
    console.log(filtered);

    setClassSchedule(filtered);
  };
  return (
    <>
      <div className="s_signup_main">
        <div className="signup_container">
          <h1
            style={{ marginTop: "0", marginBottom: "50px" }}
            className="header"
          >
            WELCOME!
          </h1>
          <h2 className="s_header">Name : {schedule.teacherName}</h2>
          <h4 style={{ marginTop: "0" }} className="s_header">
            id : {schedule.teacherId}
          </h4>
          <h2 style={{ marginBottom: "30px" }}>Please Select The Date!</h2>
          <input
            style={{ height: "35px", width: "150px" }}
            type="date"
            name="date"
            id=""
            value={date}
            onChange={handleDate}
          />
          <div className="btn_div">
            <button
              style={{
                marginTop: "20px",
                width: "60%",
                
              }}
              className="signup_btn"
              type="submit"
              onClick={handleSchedule}
            >
              View Schedule
            </button>
          </div>
        </div>
      </div>

      <h2
      style={{
        color: "white",
        textAlign: "center",
        textDecoration: "underline",
        margin:'8px 0',
      }}
    >
      SCHEDULE
    </h2>

      <div className="viewSchedule">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Class Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {classschedule &&
              classschedule.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.class}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Schedule;
