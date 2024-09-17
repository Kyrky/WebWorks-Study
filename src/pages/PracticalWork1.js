import React, { useState, useEffect } from 'react';
import '../styles/LabStyle/PracticalWork1.css';


const generateSchedule = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startDate = new Date(2024, 8, 1); 
      const endDate = new Date(2024, 8, 30); 
      const schedule = [];
      const subjects = ['ВМ', 'КДС', 'Python', 'Фіз-ра', 'C++', 'C#']; 
      const times = ['8:00-9:30', '10:00-11:30', '12:00-13:30', '14:00-15:30']; 
      const types = ['[Лк]', '[Пз]', '[Лб]']; 

      for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
        if (day.getDay() !== 0 && day.getDay() !== 6) { 
          const lessons = [];


          const numLessons = Math.floor(Math.random() * 3) + 2;
          for (let i = 0; i < numLessons; i++) {
            const subject = subjects[Math.floor(Math.random() * subjects.length)];
            const time = times[i]; 
            const type = types[Math.floor(Math.random() * types.length)];
            lessons.push({ time, subject: `${subject} ${type}` });
          }

          schedule.push({
            date: day.toLocaleDateString('uk-UA', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            lessons,
          });
        }
      }

      resolve(schedule);
    }, 1000); 
  });
};

const PracticalWork1 = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateSchedule().then((data) => {
      setSchedule(data);
      setLoading(false);
    });
  }, []);

  const getLessonClass = (type) => {
    if (type.includes('[Лб]')) return 'lab';
    if (type.includes('[Пз]')) return 'practice';
    if (type.includes('[Лк]')) return 'lecture';
    return '';
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Завантаження роскладу..</p>
      </div>
    );
  }

  return (
    <div className="schedule-container">
      <h3>Практична робота 1</h3>
      <div className="schedule-scrollable">
        {schedule.map((day, index) => (
          <div key={index} className="day-block">
            <div className="date-header">{day.date}</div>
            {day.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className={`lesson ${getLessonClass(lesson.subject)}`}>
                <span className="time">{lesson.time}</span>
                <span className="subject">{lesson.subject}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticalWork1;
