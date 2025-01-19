import React from "react";
import Arrow from "../img/arrow.svg";

function BlockCompany() {
  return (
    <div className="block-company">
      <div className="column-one">
        <div className="number">1</div>
        <div className="column-one-text">О компании</div>
      </div>

      <div className="block-team-title">
        <h3 className="column-one-title-text">
          СберТех — фундамент ИТ-экосистемы Сбера
        </h3>
        <div className="company-facts">
          <div className="company-facts-number">
            13<div className="company-facts-text">лет компании</div>
            <div class="curved-line-m"></div>
          </div>
          <div className="company-facts-number">
            2600<div className="company-facts-text">сотрудников</div>
            <div class="curved-line-m"></div>
          </div>
          <div className="company-facts-number">
            20<div className="company-facts-text">городов</div>
            <div class="curved-line-m"></div>
          </div>
          <div className="company-facts-number">
            620+
            <div className="company-facts-text">
              приложений Сбера работают на платформе
            </div>
            <div class="curved-line-m"></div>
          </div>
          <div className="company-facts-number">
            ~50
            <div className="company-facts-text">внутренних митапов в год</div>
            <div class="curved-line-m"></div>
          </div>
          <div className="company-facts-number">
            ~200
            <div className="company-facts-text">
              разработчиков участвуют в митапах
            </div>
            <div class="curved-line-m"></div>
          </div>
        </div>
        <div className="all-news-botton-mt">
          <div className="all-news-arrow-botton">
            <a href="#" className="all-news-botton">
              <div className="all-news-text">Подробнее</div>
              <div className="all-news-circle-botton">
                <div className="all-news-arrow">
                  <img src={Arrow} alt="Стрелка" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockCompany;
