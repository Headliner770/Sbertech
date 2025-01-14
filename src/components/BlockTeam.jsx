import React from "react";
import Tyatyushev from "../img/1--Максим Тятюшев.webp";
import Atoyan from "../img/2--Антон Атоян.webp";
import Savenko from "../img/3--Евгений Савенко.webp";
import Ulyanichev from "../img/4--Матвей Ульянычев.webp";
import Peresypkin from "../img/5--Михаил Пересыпкин.webp";
import Frenkel from "../img/6--Лев Френкель.webp";
import Shipov from "../img/7--Анатолий Шипов.webp";
import Semenov from "../img/8--Михаил Семенов.webp";
import Mironenko from "../img/9--Олег Мироненко.webp";
import Artyukhov from "../img/10--Сергей Артюхов.webp";
import Stolyarov from "../img/11--Андрей Столяров.webp";
import Bernstein from "../img/12--Яков Бернштейн.webp";

function BlockTeam() {
  return (
    <section className="">
      <div className="column">
        2 Команда
        <div className="column-one-title">
          <h2 className="column-one-title-text">
            Вместе создаем российские ИТ-продукты
          </h2>
          <div className="team-photo">
            <div className="team-block">
              <img src={Tyatyushev} alt="Максим Тятюшев" className="img" />
            </div>
            <div className="team-block">
              <img src={Atoyan} alt="Антон Атоян" className="img" />
            </div>
            <div className="team-block">
              <img src={Savenko} alt="Евгений Савенко" className="img" />
            </div>
            <div className="team-block">
              <img src={Ulyanichev} alt="Матвей Ульянычев" className="img" />
            </div>
            <div className="team-block">
              <img src={Peresypkin} alt="Михаил Пересыпкин" className="img" />
            </div>
            <div className="team-block">
              <img src={Frenkel} alt="Лев Френкель" className="img" />
            </div>
            <div className="team-block">
              <img src={Shipov} alt="Анатолий Шипов" className="img" />
            </div>
            <div className="team-block">
              <img src={Semenov} alt="Михаил Семенов" className="img" />
            </div>
            <div className="team-block">
              <img src={Mironenko} alt="Олег Мироненко" className="img" />
            </div>
            <div className="team-block">
              <img src={Artyukhov} alt="Сергей Артюхов" className="img" />
            </div>
            <div className="team-block">
              <img src={Stolyarov} alt="Андрей Столяров" className="img" />
            </div>
            <div className="team-block">
              <img src={Bernstein} alt="Яков Бернштейн" className="img" />
            </div>
            <div className="team-block"></div>
          </div>
        </div>
      </div>
      <div className="column-one"></div>
    </section>
    
  );
}

export default BlockTeam;
