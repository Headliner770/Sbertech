import React from "react";
import block from "../img/block.webp";

function BlockSections() {
  return (
    <div className="blocks-main">
      <div className="blocks">
        <div className="block-text">
          <h4 className="block-text-title">Создаем надежные технологии</h4>
          <p className="block-text-p">Для Сбера и других компаний</p>
        </div>
        <div className="block-picture">
          <img src={block} className="block-img" alt="img" />
        </div>
      </div>
      <div className="flex-block">
        <div className="block-blue">
          <div>
            <h4 className="block-blue-title">Аккредитованная ИТ-компания</h4>
            <p className="block-blue-text">АО «Сбербанк-Технологии»</p>
            <div className="block-blue-details-title">
              <a href="#" className="block-details">
                Подробнее
              </a>
            </div>
          </div>
        </div>
        <div className="block-green">
          <div>
            <h4 className="block-green-title">Вакансии</h4>
            <p className="block-green-text">
              Разные города, специальности и форматы работы
            </p>
            <div className="block-green-details-title">
              <a href="#" className="block-details">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockSections;
