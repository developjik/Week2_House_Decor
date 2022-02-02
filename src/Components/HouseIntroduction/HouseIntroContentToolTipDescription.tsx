import React from "react";
import { data } from "Common/Types/types";
import "Components/HouseIntroduction/Scss/HouseIntroContentTooltipDescription.scss";

type propsType = {
  idx: number;
  number: number;
  datas: data;
};

function HouseIntroContentTooltipDescription({
  idx,
  number,
  datas,
}: propsType) {
  if (number !== idx) return null;
  return (
    <div className="tooltip--description">
      <img
        src={datas.productList[idx].imageUrl}
        alt={String(datas.productList[idx].productId)}
      />
      <div className="tooltip--description__detail">
        <div className="tooltip--description__detail--name">
          {datas.productList[idx].productName}
        </div>
        <div>
          {datas.productList[number].outside ? (
            <span className="tooltip--description__detail--estimate">
              예상가
            </span>
          ) : (
            <span className="tooltip--description__detail--salesRate">
              {datas.productList[number].discountRate}%
            </span>
          )}
          <span className="tooltip--description__detail--price">
            {datas.productList[number].priceDiscount.toLocaleString("eu")}
          </span>
          <div>
            <img src="/img/move.png" alt="상품보기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseIntroContentTooltipDescription;
