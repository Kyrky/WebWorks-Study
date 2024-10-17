import React from 'react';
import '../styles/LabStyle/LabWork3.css'; // Подключаем CSS

const LabWork3 = () => {
  const videos = [
    { id: '7nm0b', title: 'Відео 7nm0b', image: '../content/7nm0b.png', views: '78 тис. переглядів', date: '1 місяць тому' },
    { id: '6m0me', title: 'Відео 6m0me', image: '../content/6m0me.png', views: '100 тис. переглядів', date: '2 тижні тому' },
    { id: '4i4e0', title: 'Відео 4i4e0', image: '../content/4i4e0.png', views: '200 тис. переглядів', date: '3 дні тому' },
    { id: 'k76t1', title: 'Відео k76t1', image: '../content/k76t1.png', views: '500 тис. переглядів', date: '1 день тому' },
    { id: '8lm5o', title: 'Відео 8lm5o', image: '../content/8lm5o.png', views: '600 тис. переглядів', date: '1 місяць тому' },
    { id: '9nv6q', title: 'Відео 9nv6q', image: '../content/9nv6q.png', views: '700 тис. переглядів', date: '2 тижні тому' },
    { id: '0pl9r', title: 'Відео 0pl9r', image: '../content/0pl9r.png', views: '800 тис. переглядів', date: '3 дні тому' },
    { id: '1rk7s', title: 'Відео 1rk7s', image: '../content/1rk7s.png', views: '900 тис. переглядів', date: '1 день тому' }
  ];

  return (
    <div className="lab3-container">
      {/* Левая боковая панель */}
      <div className="sidebar">
        <div className="logo-section">
          <h2>YouTube</h2> {/* Логотип */}
        </div>
        <hr />
        <div className="menu-section">
          <ul>
            <li>🏠 Головна</li>
            <li>📺 YouTube Shorts</li>
            <li>📑 Підписки</li>
            <li>🎵 YouTube Music</li>
          </ul>
        </div>
        <hr />
        <div className="user-section">
          <h4>Ви</h4>
          <ul>
            <li>👤 Ваш канал</li>
            <li>🕒 Історія</li>
            <li>🎥 Ваші відео</li>
            <li>⏲️ Переглянути пізніше</li>
            <li>⬇️ Завантаження</li>
            <li>📂 Показати більше</li>
          </ul>
        </div>
        <hr />
        <div className="subscriptions">
          <h4>Підписки</h4>
          <ul>
            <li>🟢 WAS</li>
            <li>🔵 TheDRZJ</li>
            <li>🟣 ROZETKA</li>
            <li>🟤 Олексій Макаренко</li>
            <li>🟢 ROZETKA GAME</li>
            <li>🟢 Хащі</li>
            <li>🔴 Показати ще 24</li>
          </ul>
        </div>
      </div>

      {/* Основной контент */}
      <div className="main-content">
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Пошук" />
        </div>
        <div className="categories">
          <button className="active">Усі</button>
          <button>Ігри</button>
          <button>Музика</button>
          <button>Новини</button>
          <button>Останні перегляди</button>
        </div>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <img className="video-thumbnail" src={video.image} alt={video.title} />
              <div className="video-title">{video.title}</div>
              <div className="video-info">{video.views} • {video.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabWork3;
