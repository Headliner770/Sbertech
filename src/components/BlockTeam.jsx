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
import { TeamMember } from "./TeamMember";

const TEAM = [
  {
    img: Tyatyushev,
    name: "Максим Тятюшев",
    position: "Генеральный директор СберТеха",
  },
  {
    img: Savenko,
    name: "Евгений Савенко",
    position: "Заместитель генерального директора СберТеха",
  },
];

function BlockTeam() {
  return (
    <section className="block-team">
      <div className="column-two">
        <div className="number">2</div>
        <div className="column-two-text">Команда</div>
      </div>

      <div className="block-team-title">
        <h3 className="block-team-title-text">
          Вместе создаем российские ИТ-продукты
        </h3>
        <div className="team-photo">
          {TEAM.map((item) => (
            <TeamMember
              key={item.name}
              name={item.name}
              photo={item.img}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlockTeam;
