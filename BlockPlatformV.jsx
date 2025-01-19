import React from "react";
import PlatformVImg from "../img/platformV.webp";

function BlockPlatformV() {
  return (
    <div className="block-platformv">
      <div className="platfomv-left-block">
        <div className="platformv">
          <h2 className="platformv-title">Мы развиваем Platform V</h2>
          <div></div>
          <div></div>
          <div>
            На базе Platform V разработчики могут быстро и легко собрать именно
            то бизнес-решение, которое станет уникальным конкурентным
            преимуществом компании
          </div>
        </div>
      </div>
      <div className="platfomv-right-block">
        <img src={PlatformVImg} className="block-platform-img" alt="" />
      </div>
    </div>
  );
}

export default BlockPlatformV;
