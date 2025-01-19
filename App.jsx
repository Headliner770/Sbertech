import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav";
import BlockSections from "./components/BlockSections";
import "./App.css";
import BlockCompany from "./components/BlockCompany";
import BlockTeam from "./components/BlockTeam";
import BlockPlatformV from "./components/BlockPlatformV";
import stLogo from "./img/Logo.png";
import Arrow from "./img/arrow.svg";
import Bernstein from "./img/12--Яков Бернштейн.webp";

function App() {
  return (
    <>
      <Nav />
      <BlockSections />
      <BlockCompany />
      <BlockTeam />
      <BlockPlatformV />
      <main>
        <div className="block-products">
          <div className="column-tree">
            <div className="number">3</div>
            <div className="column-tree-text">Продукты</div>
          </div>

          <div className="block-products-title">
            <h3 className="block-products-title-text">
              Наши продукты входят в Реестр российского ПО
            </h3>

            <div className="block-product-facts">
              <div className="block-product-fact">
                <div className="block-product-facts-text">
                  Мы занимаемся разработкой и сопровождением
                  высокотехнологичного российского программного обеспечения
                </div>
                <div class="curved-line-m"></div>
              </div>
              <div className="block-product-fact">
                <div className="block-product-facts-text-mb">
                  Наши продукты включены в единый реестр российских программ для
                  ЭВМ
                </div>
                <div class="curved-line-m"></div>
              </div>
              <div className="block-product-fact">
                <div className="block-product-facts-text-mb">
                  Более 50 программ продуктовой линейки Platform V
                </div>
                <div class="curved-line-m"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="all-news-botton-mt">
          <div className="all-news-arrow-botton">
            <a href="#" className="all-news-botton">
              <div className="all-news-text">Все продукты</div>
              <div className="all-news-circle-botton">
                <div className="all-news-arrow">
                  <img src={Arrow} alt="Стрелка" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="block-products-lower">
          <div className="block-products-flex-block">
            <a href="#" className="block-product-black">
              <h4 className="block-black-title">Образовательные стримы</h4>
              <div className="block-black-text-p">
                Стажировки и проекты Сбера, чтобы быстро влиться в команду
              </div>
              <div>arrow</div>
            </a>
            <a href="#" className="block-product-blue">
              <div className="block-product-blue-text">
                <h4 className="block-blue-title">
                  Отличные условия для каждого
                </h4>
                <div className="block-blue-text-p">
                  ДМС с первого дня, снижение ипотечной ставки до 4%, скидки на
                  спорт и образование
                </div>
                <div>arrow</div>
              </div>
            </a>
          </div>
        </div>

        <div className="block-culture">
          <div className="column-four">
            <div className="number">4</div>
            <div className="column-four-text">Культура</div>
          </div>

          <div className="column-one-title">
            <h3 className="column-one-title-text">Корпоративная культура</h3>
          </div>

          <div className="column-one"></div>
        </div>
        <div className="curved-line-l"></div>
        <h3 className="sbertech-news">Новости СберТеха</h3>

        <div className="all-news-botton-mt">
          <div className="all-news-arrow-botton">
            <a href="#" className="all-news-botton">
              <div className="all-news-text">Все новости</div>
              <div className="all-news-circle-botton">
                <div className="all-news-arrow">
                  <img src={Arrow} alt="Стрелка" />
                </div>
              </div>
            </a>
          </div>
        </div>

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
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-logo-column">
            <img src={stLogo} className="stLogo" alt="Лого" />
          </div>
          <div className="footer-link-block">
            <div className="footer-company-column">
              <div>
                <a href="#">О компании</a>
              </div>
              <div>
                <a href="#">Команда</a>
              </div>
              <div>
                <a href="#">Условия работы</a>
              </div>
              <div>
                <a href="#">Блог</a>
              </div>
              <div>
                <a href="#">Программы в вузах</a>
              </div>
              <div>
                <a href="#">МФТИ</a>
              </div>
              <div>
                <a href="#">Контакты</a>
              </div>
              <div>
                <a href="#">Карта сайта</a>
              </div>
            </div>
            <div className="footer-vacancies-column">
              <div>
                <a href="#">Вакансии</a>
              </div>
              <div>
                <a href="#">Реестр программного обеспечения</a>
              </div>
              <div>
                <a href="#">Пользовательское соглашение</a>
              </div>
              <div>
                <a href="#">Политика конфиденциальности</a>
              </div>
              <div>
                <a href="#">Политика обработки и защиты персональных данных</a>
              </div>
              <div>
                <a href="#">Условия распространения персональных данных</a>
              </div>
              <div>
                <a href="#">Согласие на обработку персональных данных</a>
              </div>
              <div>
                <a href="#">Юридическая информация</a>
              </div>
              <div>
                <a href="#">Горячая линия комплаенс</a>
              </div>
            </div>
          </div>
          <div className="footer-info-column">
            <div>
              <a href="#">info@sbertech.ru</a>
            </div>
            <div>
              <a href="#"></a>+7 495 669 08 08
            </div>
            <div>
              "Контакты для СМИ"
              <br />
              <a href="#">PR@sbertech.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
{
  /* <div class="rounded-b-10 border-x border-b h-[14px]">
</div> */
}
