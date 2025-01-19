import React from "react";

function BlockProducts() {
  return (
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
              Мы занимаемся разработкой и сопровождением высокотехнологичного
              российского программного обеспечения
            </div>
            <div class="curved-line-m"></div>
          </div>
          <div className="block-product-fact">
            <div className="block-product-facts-text-mb">
              Наши продукты включены в единый реестр российских программ для ЭВМ
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
  );
}

export default BlockProducts;
