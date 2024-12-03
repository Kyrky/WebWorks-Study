import React from 'react';
import '../styles/Main.css'; 

const Home = () => {
  return (
    <div className="root">
      <header className="main-header">
        <h1>Hi, I am John, Creative Technologist</h1>
        <p>
          An innovative problem solver specializing in creative design and modern web development. Passionate about delivering seamless user experiences.
        </p>
        <button className="download-btn">Download Resume</button>
      </header>
      <section className="recent-posts">
        <h2>Recent posts</h2>
        <div className="posts-container">
          <article className="post">
            <div className="image-placeholder">Image</div>
            <h3>Making a design system from scratch</h3>
            <p>
              Learn how to create a scalable design system from the ground up to bring uniformity and flexibility to your designs.
            </p>
            <span>12 Feb 2020 | Design, Pattern</span>
          </article>
          <article className="post">
            <div className="image-placeholder">Image</div>
            <h3>Creating pixel perfect icons in Figma</h3>
            <p>
              Discover tips and tricks for crafting flawless, pixel-perfect icons using Figma’s powerful design tools.
            </p>
            <span>12 Feb 2020 | Figma, Icon Design</span>
          </article>
        </div>
      </section>
      <section className="featured-works">
        <h2>Featured works</h2>
        <div className="works-container">
          <article className="work">
            <div className="image-placeholder">Image</div>
            <h3>Designing Dashboards</h3>
            <p>A practical guide to building dashboards that balance aesthetics with usability.</p>
            <span>2020 | Dashboard</span>
          </article>
          <article className="work">
            <div className="image-placeholder">Image</div>
            <h3>Vibrant Portraits of 2020</h3>
            <p>A showcase of vibrant, colorful portraits inspired by the energy of the year.</p>
            <span>2020 | Illustration</span>
          </article>
          <article className="work">
            <div className="image-placeholder">Image</div>
            <h3>36 Days of Malayalam Type</h3>
            <p>Exploring typography inspired by the cultural heritage of Malayalam script.</p>
            <span>2019 | Typography</span>
          </article>
        </div>
      </section>
      <footer className="main-footer">
        <p>Copyright © 2024. All rights reserved.</p>
        <div className="social-links">
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#github">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;