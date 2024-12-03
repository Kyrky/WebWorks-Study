import React from 'react';
import '../styles/LabStyle/LabWork6.css'; 

const LabWork6 = () => {
  return (
    <div className="lab6-container">
      <h3>Лабораторна робота 6</h3>
      <div className="animation-container">
        <div className="pikachu male">
          <img
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
            alt="Pikachu Male"
          />
        </div>
        <div className="pikachu female">
          <img
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif"
            alt="Pikachu Female"
          />
        </div>
      </div>
    </div>
  );
};

export default LabWork6;
