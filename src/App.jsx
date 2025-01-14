import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav";
import BlockSections from "./components/BlockSections";
import "./App.css";
import BlockCompany from "./components/BlockCompany";
import BlockTeam from "./components/BlockTeam";
import BlockPlatformV from "./components/BlockPlatformV";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <BlockSections />
      <BlockCompany />
      <BlockTeam />
      <BlockPlatformV />
      <main>
        {/* <section>
          <div className="column-two">
            2 Команда
            <div className="column-one-title">
              <h2 className="column-one-title-text">
                Вместе создаем российские ИТ-продукты
              </h2>
              <div className="team-photo">
                <div>
                  <img src={Tyatyushev} alt="Максим Тятюшев" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="column-one"></div>
        </section> */}

        <div className="column-tree">
          3 Продукты
          <div className="column-tree-title">
            <h3 className="column-one-title-text">
              Наши продукты входят в Реестр российского ПО
            </h3>
            <div className="box">
              <div className="company-facts">
                <div className="company-facts-number">
                  <div className="company-facts-text">
                    Мы занимаемся разработкой и сопровождением
                    высокотехнологичного российского программного обеспечения
                  </div>
                  <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
                </div>
                <div className="company-facts-number">
                  <div className="company-facts-text">
                    Наши продукты включены в единый реестр российских программ
                    для ЭВМ
                  </div>
                  <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
                </div>
                <div className="company-facts-number">
                  <div className="company-facts-text">
                    Более 50 программ продуктовой линейки Platform V
                  </div>
                  <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-one"></div>

        <div className="column-one">
          4 Культура
          <div className="column-one-title">
            <h3 className="column-one-title-text">Корпоративная культура</h3>
          </div>
        </div>
        <div className="column-one"></div>

        <div className="column-one">
          5 Контакты
          <div className="column-one-title">
            <h3 className="column-one-title-text">
              Новоданиловская набережная, дом 10 +7 495 669 08 08
              info@sbertech.ru
            </h3>
          </div>
        </div>
        <div className="column-one"></div>
        <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
      </main>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test !!!HMR!!!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>1111111111111111111111111111111111111111</h1>
      </div>
    </>
  );
}

export default App;
{
  /* <div class="rounded-b-10 border-x border-b h-[14px]">
</div> */
}
