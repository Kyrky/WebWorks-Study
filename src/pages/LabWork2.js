import React, { useState } from 'react';
import '../styles/LabStyle/LabWork2.css';

const LabWork2 = () => {
  const [inputValue, setInputValue] = useState('Активний текстовий інпут');
  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="labwork2-container">
      <h3 className="labwork2-header">Лабораторна робота 2</h3>
      <p className="labwork2-content">Контент лабораторної роботи 2...</p>

      <ul className="labwork2-list">
        <li className="labwork2-list-item">Перший елемент списку</li>
        <li className="labwork2-list-item">Другий елемент списку</li>
        <li className="labwork2-list-item special">Special Елемент</li>
        <li className="labwork2-list-item">Елемент після special</li>
      </ul>

      <div className="labwork2-div">
        <p className="labwork2-paragraph">Перший параграф</p>
        <p className="labwork2-paragraph">Другий параграф</p>
      </div>

      <div className="labwork2-links">
        <a href="https://example.com" className="labwork2-link">Посилання на зовнішній ресурс</a><br></br>
        <a href="http://example.com" className="labwork2-link">Посилання на інший ресурс</a>
      </div>
      <br></br>
      <div className="labwork2-inputs">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="labwork2-input"
        />
      <br></br>
        <input
          type="text"
          disabled
          value="Disabled текстовий інпут"
          className="labwork2-input-disabled"
        />
      <br></br>
        <label className="labwork2-checkbox-label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="labwork2-checkbox"
          />
          Чекбокс
        </label>
      </div>
    </div>
  );
};

export default LabWork2;
