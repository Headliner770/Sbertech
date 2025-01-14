import React from "react";

function BlockCompany() {
  return (
    <div className="column">
      <div className="column-one-text">
        1 <h5>О компании</h5>
      </div>

      <div className="block-team-title">
        <h3 className="column-one-title-text">
          СберТех — фундамент ИТ-экосистемы Сбера
        </h3>
        <div className="box">
          <div className="company-facts">
            <div className="company-facts-number">
              13<div className="company-facts-text">лет компании</div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
            <div className="company-facts-number">
              2600<div className="company-facts-text">сотрудников</div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
            <div className="company-facts-number">
              20<div className="company-facts-text">городов</div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
            <div className="company-facts-number">
              620+
              <div className="company-facts-text">
                приложений Сбера работают на платформе
              </div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
            <div className="company-facts-number">
              ~50
              <div className="company-facts-text">внутренних митапов в год</div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
            <div className="company-facts-number">
              ~200
              <div className="company-facts-text">
                разработчиков участвуют в митапах
              </div>
              <div class="rounded-b-10 border-x border-b h-[14px] custom-border"></div>
            </div>
          </div>
        </div>
        <div>
          <a href="">
            Подробнее
            <div></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlockCompany;
