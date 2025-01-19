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
          <div className="team-block">
            <img src={Tyatyushev} alt="Максим Тятюшев" className="image" />
            <div className="hidden-text">
              <p className="name">Максим Тятюшев</p>
              <p className="post">Генеральный директор СберТеха</p>
            </div>
          </div>
          <div className="team-block">
            <img src={Atoyan} alt="Антон Атоян" className="image" />
            <div className="hidden-text">
              <p className="name">Антон Атоян</p>
              <p className="post">
                Заместитель генерального директора, директор производства
                Platform V
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Savenko} alt="Евгений Савенко" className="image" />
            <div className="hidden-text">
              <p className="name">Евгений Савенко</p>
              <p className="post">
                Заместитель генерального директора СберТеха
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Ulyanichev} alt="Матвей Ульянычев" className="image" />
            <div className="hidden-text">
              <p className="name">Матвей Ульянычев</p>
              <p className="post">Директор по развитию Platform V</p>
            </div>
          </div>
          <div className="team-block">
            <img src={Peresypkin} alt="Михаил Пересыпкин" className="image" />
            <div className="hidden-text">
              <p className="name">Михаил Пересыпкин</p>
              <p className="post">Лидер центра архитектуры Platform V</p>
            </div>
          </div>
          <div className="team-block">
            <img src={Frenkel} alt="Лев Френкель" className="image" />
            <div className="hidden-text">
              <p className="name">Лев Френкель</p>
              <p className="post">
                Управляющий директор, лидер направления IT as a service
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Shipov} alt="Анатолий Шипов" className="image" />
            <div className="hidden-text">
              <p className="name">Анатолий Шипов</p>
              <p className="post">
                Управляющий директор, лидер направления GitVerse
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Semenov} alt="Михаил Семенов" className="image" />
            <div className="hidden-text">
              <p className="name">Михаил Семенов</p>
              <p className="post">
                Лидер центра разработки продукта Platform V Pangolin
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Mironenko} alt="Олег Мироненко" className="image" />
            <div className="hidden-text">
              <p className="name">Олег Мироненко</p>
              <p className="post">
                Директор Дивизиона интеграционные сервисы СберТеха, лидер трайба
                Synapse
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Artyukhov} alt="Сергей Артюхов" className="image" />
            <div className="hidden-text">
              <p className="name">Сергей Артюхов</p>
              <p className="post">
                Директор Дивизиона инструменты производственного процесса
                (Platform V Works), лидер трайба Platform V Works
              </p>
            </div>
          </div>
          <div className="team-block">
            <img src={Stolyarov} alt="Андрей Столяров" className="image" />
            <div className="hidden-text">
              <p className="name">Андрей Столяров</p>
              <p className="post">Исполнительный директор, СТО</p>
            </div>
          </div>
          <div className="team-block">
            <img src={Bernstein} alt="Яков Бернштейн" className="image" />
            <div className="hidden-text">
              <p className="name">Яков Бернштейн</p>
              <p className="post">
                Исполнительный директор-начальник управления
              </p>
            </div>
          </div>
          <div className="team-block"></div>
        </div>
      </div>
    </section>
  );
}

export default BlockTeam;
