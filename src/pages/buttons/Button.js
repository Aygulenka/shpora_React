// Button.js
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'; // Импортируем общий CSS для кнопки

const Button = ({ to, children }) => (
  <Link to={to} className="button">
    <div className="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{children}</span>
      </button>
    </div>
  </Link>
);

export default Button;



