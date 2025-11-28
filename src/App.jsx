import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  menuClick(){
    const navlist = document.getElementById("navlist");
    navlist.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header>
          <nav>
            <div className='logo'>My Website</div>
            
            <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>contact</li>
            </ul>
            <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
          </nav>
        </header>
        <section>
          <h1>Welcome To My Responsive Website</h1>
          <p>This design adopts that various screen sizes</p>
        </section>
        <footer>copyright @2025.Allrights reserved.</footer>
      </>
    )
  }
}