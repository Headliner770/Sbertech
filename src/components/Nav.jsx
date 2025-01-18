import React from "react";
import stLogo from "../img/Logo.png";
import "../App.css";

function Nav() {
  return (
    <header class="header-nav">
      <div className="block-nav">
        <div className="NavLogo">
          <img src={stLogo} className="stLogo" alt="Лого" />
        </div>
        <div className="NavElements">
          <a href="#">О компании</a>
          <a href="#">Вакансии</a>
          <a href="#">Команда</a>
          <a href="#">Программы в вузах</a>
          <a href="#">Блог</a>
          <a href="#">Контакты</a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
