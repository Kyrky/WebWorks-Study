import React from 'react';
import '../styles/LabStyle/LabWork4.css'; 


const LabWork4 = () => {
  return (
    <div className="planner-container">
      <h3>Лабораторна робота 4</h3>
      <div className="planner">
        <header className="planner-header">
          <h1>Weekly Plan</h1>
          <div className="header-inputs">
            <div>
              <label htmlFor="week-of">Week Of:</label>
              <input type="text" id="week-of" placeholder="Enter week..." />
            </div>
            <div>
              <label htmlFor="healthy-habit">Healthy Habit:</label>
              <input type="text" id="healthy-habit" placeholder="Enter habit..." />
            </div>
            <div>
              <label>Summary:</label>
              <span>
                <label><input type="checkbox" /> Rocked It</label>
                <label><input type="checkbox" /> Room For Improvement</label>
              </span>
            </div>
          </div>
        </header>
        <main className="planner-grid">
          <div className="planner-section to-do">
            <h2>To Do</h2>
            <h3>Top 3 Goals</h3>
            <ul>
              {Array(3).fill(0).map((_, idx) => (
                <li key={`goal-${idx}`}>
                  <input type="checkbox" /> <input type="text" placeholder={`Goal ${idx + 1}`} />
                </li>
              ))}
            </ul>
            <h3>Everything Else</h3>
            <ul>
              {Array(6).fill(0).map((_, idx) => (
                <li key={`task-${idx}`}>
                  <input type="checkbox" /> <input type="text" placeholder={`Task ${idx + 1}`} />
                </li>
              ))}
            </ul>
            <h3>Next Week</h3>
            <ul>
              <li><input type="text" placeholder="Add notes for next week..." /></li>
            </ul>
          </div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (day) => (
              <div key={day} className="planner-section day">
                <h2>{day}</h2>
                <textarea placeholder={`Add tasks for ${day}...`}></textarea>
              </div>
            )
          )}
        </main>
      </div>
    </div>
  );
};

export default LabWork4;
