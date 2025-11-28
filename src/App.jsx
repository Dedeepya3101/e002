import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css'; // make sure this file exists and styles header, nav, forms, footer

export default class App extends Component {
  // toggle mobile menu
  menuClick() {
    const nav = document.getElementById('navlist');
    if (nav) nav.classList.toggle('active');
  }

  render() {
    return (
      <>
        {/* HEADER + NAV */}
        <header>
          <nav className="navbar">
            <div className="logo">Student Portal</div>

            {/* nav links */}
            <ul id="navlist" className="navlist">
              <li><a href="#home" onClick={() => this.menuClick()}>Home</a></li>
              <li><a href="#login" onClick={() => this.menuClick()}>Login</a></li>
              <li><a href="#register" onClick={() => this.menuClick()}>Register</a></li>
              <li><a href="#contact" onClick={() => this.menuClick()}>Contact</a></li>
            </ul>

            {/* hamburger for small screens */}
            <div className="menu" onClick={() => this.menuClick()} aria-hidden="true">
              &#9776;
            </div>
          </nav>
        </header>

        {/* MAIN SECTION: title + forms */}
        <section className="form-section" id="home">
          <div className="intro">
            <h1>Student Login & Registration</h1>
            <p>Reusable custom hook (useForm) powering both forms — simple, clean and responsive.</p>
          </div>

          <div className="forms-container">
            {/* Login and Register components are separate files */}
            <div id="login"><Login /></div>
            <div id="register"><Register /></div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <div>© 2025. All Rights Reserved.</div>
          <div className="credits">Made with ❤️ by You</div>
        </footer>
      </>
    );
  }
}
