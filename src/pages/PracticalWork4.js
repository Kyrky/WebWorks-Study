import React from 'react';
import '../styles/LabStyle/PracticalWork4.css'; 

const keys = [
  ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  ["~ `", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
  ["Ctrl", "Alt", "Space", "Alt", "Ctrl"]
];

const numpadKeys = [
  ["Num Lock", "/", "*", "-"],
  ["7", "8", "9", "+"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", ".", ","]
];

const PracticalWork4 = () => {
  return (
    <div className="keyboard-container">
      <h3>Практична робота 4</h3>
      <div className="keyboard">
        <div className="main-keys">
          {keys.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="key-row">
              {row.map((key, keyIndex) => (
                <div
                  key={`key-${keyIndex}`}
                  className={`key ${
                    key === "Space" ? "extra-large" : key === "Backspace" || key === "Enter" || key === "Shift" ? "large" : ""
                  }`}
                >
                  {key}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="numpad">
          {numpadKeys.map((row, rowIndex) => (
            <div key={`numpad-row-${rowIndex}`} className="key-row numpad-row">
              {row.map((key, keyIndex) => (
                <div
                  key={`numpad-key-${keyIndex}`}
                  className={`key numpad-key ${
                    key === "0" ? "extra-wide" : key === "Enter" ? "large" : ""
                  }`}
                >
                  {key}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticalWork4;
