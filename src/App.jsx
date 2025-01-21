import { Nav } from "./components/Nav";
import BlockSections from "./components/BlockSections";
import BlockCompany from "./components/BlockCompany";
import BlockTeam from "./components/BlockTeam";
import BlockPlatformV from "./components/BlockPlatformV";
import BlockProducts from "./components/BlockProducts";
import BlockContacts from "./components/BlockContacts";
import Footer from "./components/Footer";
import "./App.css";
import Arrow from "./img/arrow.svg";

function App() {
  return (
    <>
      <Nav />
      <main>
        <BlockSections />
        <BlockCompany />
        <BlockTeam />
        <BlockPlatformV />
        <BlockProducts />

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

        <BlockContacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
