import React from "react";
import Arrow from "../img/arrow.svg";

function BlockContacts() {
  return (
    <div className="block-contacts">
      <div className="column-five">
        <div className="number">5</div>
        <div className="column-five-text">Контакты</div>
      </div>

      <div className="column-five-title">
        <h3 className="column-five-title-text">
          Новоданиловская набережная, дом 10 <br />
          +7 495 669 08 08 <br />
          info@sbertech.ru
        </h3>
      </div>
      <div className="all-news-botton-mt">
        <div className="all-news-arrow-botton">
          <a href="#" className="all-news-botton">
            <div className="all-news-text">Все офисы</div>
            <div className="all-news-circle-botton">
              <div className="all-news-arrow">
                <img src={Arrow} alt="Стрелка" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlockContacts;
