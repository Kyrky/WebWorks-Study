import React, { useEffect } from 'react';
import '../styles/LabStyle/LabWork7.scss';

const LabWork7 = () => {
  useEffect(() => {
    const canvas = document.getElementById('holidayCanvas');
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 300); // Фіксована ширина
    const height = (canvas.height = 200); // Фіксована висота

    // Сніжинки
    const snowflakes = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
    }));

    function drawSnowflakes() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
        flake.y += flake.speed;
        if (flake.y > height) flake.y = 0;
      });
    }

    // Ялинка
    function drawTree() {
      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.moveTo(width / 2, 50);
      ctx.lineTo(width / 2 - 40, 150);
      ctx.lineTo(width / 2 + 40, 150);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(width / 2, 80);
      ctx.lineTo(width / 2 - 30, 150);
      ctx.lineTo(width / 2 + 30, 150);
      ctx.closePath();
      ctx.fill();

      // Стовбур
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(width / 2 - 10, 150, 20, 20);
    }

    // Зірка
    function drawStar() {
      ctx.save();
      ctx.fillStyle = Math.random() > 0.5 ? 'yellow' : '#FFD700';
      ctx.beginPath();
      ctx.moveTo(width / 2, 40);
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          width / 2 + 10 * Math.cos((Math.PI * 2 * i) / 5 - Math.PI / 2),
          40 + 10 * Math.sin((Math.PI * 2 * i) / 5 - Math.PI / 2)
        );
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      drawSnowflakes();
      drawTree();
      drawStar();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="card">
      <header className="card__header">
        <h1 className="card__title">Happy New Year 2025!</h1>
      </header>
      <main className="card__content">
        <p className="card__message">
          Wishing you a joyous holiday season and a New Year filled with happiness, health, and success.
        </p>
        <div className="card__decoration">
          <canvas id="holidayCanvas" className="card__canvas"></canvas>
        </div>
      </main>
      <footer className="card__footer">
        <button className="card__button">Send Wishes</button>
      </footer>
    </div>
  );
};

export default LabWork7;
