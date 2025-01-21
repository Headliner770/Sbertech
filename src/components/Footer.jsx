import stLogo from "../img/Logo.png";

function Footer() {
  return (
    <footer className="footer-border">
      <div className="footer-main">
        <div className="footer-logo-column">
          <img src={stLogo} className="stLogo" alt="Лого" />
        </div>
        <div className="footer-link-block">
          <div className="footer-company-column">
            <div>
              <a className="footer-a" href="#">
                О компании
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Команда
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Условия работы
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Блог
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Программы в вузах
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                МФТИ
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Контакты
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Карта сайта
              </a>
            </div>
          </div>
          <div className="footer-vacancies-column">
            <div>
              <a className="footer-a" href="#">
                Вакансии
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Реестр программного обеспечения
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Пользовательское соглашение
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Политика конфиденциальности
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Политика обработки и защиты персональных данных
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Условия распространения персональных данных
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Согласие на обработку персональных данных
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Юридическая информация
              </a>
            </div>
            <div>
              <a className="footer-a" href="#">
                Горячая линия комплаенс
              </a>
            </div>
          </div>
        </div>
        <div className="footer-info-column">
          <div>
            <a className="footer-a" href="#">
              info@sbertech.ru
            </a>
          </div>
          <div>
            <a className="footer-a" href="#"></a>+7 495 669 08 08
          </div>
          <div>
            "Контакты для СМИ"
            <br />
            <a className="footer-a" href="#">
              PR@sbertech.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
