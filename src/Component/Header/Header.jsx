import React from "react";
import { Container } from "reactstrap";
import "./Header.css";
const navLinks=[
    {
        display:'Home',
        url:'#home'
    },
    {
        display:'About',
        url:'#about'
    },
    {
        display:'Services',
        url:'#services'
    },
    {
        display:'Portfolio',
        url:'#portfolio'
    },
    {
        display:'Contact',
        url:'#contact'
    },

]
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-item-center justify-content-between">
          <div className="logo">
            <h5>Boobalan</h5>
          </div>
          <div className="nav_menu">
          <ul className="nav_list">
            {
                navLinks.map((item,index)=>
                    <li className="nav_item"key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                )
            }
          
          </ul>
        </div>
        <div className="nav_right d-flex align-items-center gap-4">
            <button className="btn">Let's Talk</button>
            <span className="mobile_menu"><i class="ri-menu-line"></i></span>
        </div>

        </div>
      
      </Container>
    </header>
  );
};

export default Header;
